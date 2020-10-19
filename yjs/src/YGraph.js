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
        //TODO
    }
    
    getVertices(){
        return this.data.vertices;
    }

    queryVertex(vertexID){
        return this.data.vertices.filter(item => item.id === vertexID)
    }
    
    queryEdge(source, destination){
        //TODO
    }
    
    //CollabServer: removeVertex(vertexID, timestamp){}
    removeVertex(vertexID){
        //TODO
    }
    
    //CollabServer
    clearVertices(){
        //TODO
    }
    
    getEdgesFrom(vertexId){
        //TODO
    }
    
    //CollabServer: addEdge(source, destination, timestamp){}
    addEdge(source, destination){
        //TODO
    }
    
    //CollabServer: removeEdge(source, destination, timestamp){}
    removeEdge(source, destination, timestamp){
        //TODO
    }
}