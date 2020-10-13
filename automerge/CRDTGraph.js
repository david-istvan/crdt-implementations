/**
 * Copyright (c) 2020
 *
 * @summary CRDT Graph abstraction for Automerge
 * @author Istvan David <hello@istvandavid.com>
 *
 * Created at     : 2020-09-27
 * Last modified  : 2020-09-28
 */
 
const Automerge = require('automerge')

class CRDTGraph {
    
    static create(){
        let _g = new CRDTGraph();
        _g.data = Automerge.from({ vertices: []})
        _g.remotes = []
        return _g
    }
     
    static join(graph){
        let _g = new CRDTGraph();
        _g.data = Automerge.init()
        _g.data = Automerge.merge(_g.data, graph.data)
        _g.origin = graph
        graph.remotes.push(_g)
        return _g
    }
    
    addVertex(vertexID){
        if(this.queryVertex(vertexID).length > 0){
            return
        }
        
        let oldData = this.data
        this.data = Automerge.change(this.data, 'Add vertex', d => {
            d.vertices.push({ id: vertexID, outEdges: [] })
        })
        this.propagateChanges(oldData)
    }
    
    getVertices(){
        return this.data.vertices;
    }

    queryVertex(vertexID){
        return this.data.vertices.filter(item => item.id === vertexID)
    }
    
    queryEdge(source, destination){
        let sourceVertex = this.queryVertex(source)
        if(sourceVertex.length !== 1){
            return
        }else{
            return sourceVertex[0].outEdges.filter(item => item === destination)
        }
    }
    
    //CollabServer: removeVertex(vertexID, timestamp){}
    removeVertex(vertexID){
        let index = this.data.vertices.findIndex(item => item.id === vertexID)
        
        let oldData = this.data
        
        this.data = Automerge.change(this.data, 'Remove vertex', d => {
            delete d.vertices[index]
        })
        this.propagateChanges(oldData)
    }
    
    //CollabServer
    clearVertices(){
        let oldData = this.data
        
        this.data = Automerge.change(this.data, 'Clear vertices', d => {
            d.vertices = []
        })
        this.propagateChanges(oldData)
    }
    
    getEdgesFrom(vertexId){
        let sourceIndex = this.data.vertices.findIndex(item => item.id === vertexId)
        return this.data.vertices[sourceIndex].outEdges
    }
    
    //CollabServer: addEdge(source, destination, timestamp){}
    addEdge(source, destination){
        if(this.queryEdge(source, destination).length > 0){
            return
        }
    
        let sourceIndex = this.data.vertices.findIndex(item => item.id === source)
        
        let oldData = this.data
        
        this.data = Automerge.change(this.data, 'Add edge', d => {
            d.vertices[sourceIndex].outEdges.push(destination)
        })
        this.propagateChanges(oldData)
    }
    
    //CollabServer: removeEdge(source, destination, timestamp){}
    removeEdge(source, destination, timestamp){
        let sourceIndex = this.data.vertices.findIndex(item => item.id === source)
        let destinationIndex = this.data.vertices.find(item => item.id === source).outEdges.findIndex(item => item === destination)
        
        let oldData = this.data
        
        this.data = Automerge.change(this.data, 'Remove edge', d => {
            delete d.vertices[sourceIndex].outEdges[destinationIndex]
        })
        this.propagateChanges(oldData)
    }
    
    propagateChanges(oldData){
        let changes = Automerge.getChanges(oldData, this.data)
        if (typeof this.remotes !== 'undefined' && this.remotes.length !== 0) {
            //console.log('\t\t updating remotes')
            for(let remote of this.remotes){
                remote.data = Automerge.applyChanges(remote.data, changes)
            }
        }else if(typeof this.origin !== 'undefined') {
            //console.log('\t\t updating origin')
            this.origin.data = Automerge.applyChanges(this.origin.data, changes)
        }
    }
}

module.exports = CRDTGraph