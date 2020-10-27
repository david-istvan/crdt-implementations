/**
 * Copyright (c) 2020
 *
 * @summary Rich CRDT Graph abstraction for Yjs.
 * @author Istvan David <hello@istvandavid.com>
 */

import * as Y from 'yjs'

import { YAbstractGraph } from './YAbstractGraph.js'

export class YGraph extends YAbstractGraph {
    
    constructor (entries) {
        super(entries)
    }

    addVertex(vertexID){
        if(this.has(vertexID)){
            return
        }
        this.set(vertexID, [])
    }
    
    getVertices(){
        return this.keys();
    }

    queryVertex(vertexID){
        return [vertexID, this.get(vertexID)]
    }
    
    queryEdge(source, destination){
        return this.get(source).filter(item => item === destination).length>0
    }
    
    //CollabServer: removeVertex(vertexID, timestamp){}
    removeVertex(vertexID){
        this.delete(vertexID)
    }
    
    //CollabServer
    clearVertices(){
        Array.from(this.getVertices()).forEach(vertexID => this.removeVertex(vertexID))
    }
    
    getEdgesFrom(vertexID){
        return Array.from(this.get(vertexID).values())
    }
    
    //CollabServer: addEdge(source, destination, timestamp){}
    addEdge(source, destination){
        this.get(source).push(destination)
    }
    
    //CollabServer: removeEdge(source, destination, timestamp){}
    removeEdge(source, destination){
        let s = this.get(source)
        if(s === undefined){
            return
        }
        let i = s.indexOf(destination)
        //console.log(i)
        if(i <= -1){
            return
        }
        this.get(source).splice(i, 1)
    }
}