/**
 * Copyright (c) 2020
 *
 * @summary Rich CRDT Graph abstraction for Yjs.
 * @author Istvan David <hello@istvandavid.com>
 */

import * as Y from 'yjs'

import { YAbstractGraph } from './YAbstractGraph.js'
import { Vertex } from './Vertex.js';

export class YGraph extends YAbstractGraph {
    
    constructor (entries) {
        super(entries)
    }

    addVertex(vertexID){
        if(this.findKey(vertexID) !== undefined){
            console.log('ERROR: Vertex with ID "', vertexID, '" already exists')
            return
        }
        let vertex = new Vertex(vertexID)
        this.set(vertex, [])
    }
    
    getVertices(){
        return this.keys();
    }
    
    findKey(vertexID){
        return Array.from(this.keys()).find(k => k.getID() === vertexID)
    }

    queryVertex(vertexID){
        let key = this.findKey(vertexID)
        if(key === undefined){
            return undefined
        }
        return [key, this.get(key)]
    }
    
    queryEdge(source, destination){
        let key = this.findKey(source)
        if(key === undefined){
            return
        }
        return this.get(key).filter(vertex => vertex.getID() === destination).length>0
    }
    
    //CollabServer: removeVertex(vertexID, timestamp){}
    removeVertex(vertexID){
        let key = this.findKey(vertexID)
        this.delete(key)
    }
    
    //CollabServer
    clearVertices(){
        Array.from(this.getVertices()).forEach(vertex => this.delete(vertex))
    }
    
    getEdgesFrom(vertexID){
        let key = this.findKey(vertexID)
        return Array.from(this.get(key).values())
    }
    
    //CollabServer: addEdge(source, destination, timestamp){}
    addEdge(source, destination){
        let key = this.findKey(source)
        if(key === undefined){
            console.log('ERROR: source does not exist.')
            return
        }
        let value = this.findKey(destination)
        if(value === undefined){
            console.log('ERROR: destination does not exist.')
            return
        }
        this.get(key).push(value)
    }
    
    //CollabServer: removeEdge(source, destination, timestamp){}
    removeEdge(source, destination){
        let key = this.findKey(source)
        if(key === undefined){
            return
        }
        let value = this.findKey(destination)
        if(value === undefined){
            return
        }
        let i = this.get(key).indexOf(value)
        if(i <= -1){
            return
        }
        this.get(key).splice(i, 1)
    }
}