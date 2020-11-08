/**
 * Copyright (c) 2020
 *
 * @summary Abstract Node logical type. Serves as a common abstraction to the other logical types.
 * @author Istvan David <hello@istvandavid.com>
 */

import * as Y from 'yjs'

export class Node extends Y.Map{

    constructor(name){
        super(undefined)
        this.name = name
        this.generateID()
    }
    
    generateID() {
        this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);});
    }

    getID(){
        return this.id
    }
    
    setAttribute(name, value){
        this.set(name, value)
    }
    
    getAttribute(name){
        return this.get(name)
    }
    
    deleteAttribute(name){
        this.set(name, undefined)
    }
    
    equals(entity){
        return this.id === entity.id
    }
}