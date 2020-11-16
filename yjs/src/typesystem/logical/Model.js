/**
 * Copyright (c) 2020
 *
 * @summary Model type for the general logical type level.
 * @author Istvan David <hello@istvandavid.com>
 */

import { Node } from './Node.js';
import * as Y from 'yjs'

export class Model extends Node {
    
    constructor(name){
        super(name)
        this.set('entities', new Y.Map())
        this.set('relationships', new Y.Map())
    }
    
    /*addEntity(entity){
        this.get('entities').set(entity.getName(), entity)
    }
    
    getEntities(){
        return this.get('entities')
    }
    
    addRelationship(portName, relationship){
        this.get('relationships').set(portName, relationship)
    }
    
    getRelationship(name){
        return this.get('relationships').get(name)
    }

    deleteRelationship(name){
        this.get('relationships').set(name, undefined)
    }*/
}