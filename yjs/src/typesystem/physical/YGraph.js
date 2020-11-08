/**
 * Copyright (c) 2020
 *
 * @summary CRDT Graph specialization for the highest physical type level. Currently not in use. Left here as a placeholder for future considerations to serve as the base physical type to the deepest logical type level.
 * @author Istvan David <hello@istvandavid.com>
 */

import * as Y from 'yjs'

import { Entity } from '../logical/Entity.js';

export class YGraph extends Y.Map {
    
    constructor(entries) {
        super(entries)
    }

    addEntity(entityID){
        if(this.findKey(entityID) !== undefined){
            console.log('ERROR: Vertex with ID "', entityID, '" already exists')
            return
        }
        let entity = new Vertex(entityID)
        this.set(entity, [])
    }
    
    getEntities(){
        return this.keys();
    }
    
    findKey(entityID){
        return Array.from(this.keys()).find(k => k.getID() === entityID)
    }

    queryVertex(entityID){
        let key = this.findKey(entityID)
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
        return this.get(key).filter(entity => entity.getID() === destination).length>0
    }
    
    //CollabServer: removeVertex(entityID, timestamp){}
    removeVertex(entityID){
        let key = this.findKey(entityID)
        this.delete(key)
    }
    
    //CollabServer
    clearEntities(){
        Array.from(this.getEntities()).forEach(entity => this.delete(entity))
    }
    
    getEdgesFrom(entityID){
        let key = this.findKey(entityID)
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