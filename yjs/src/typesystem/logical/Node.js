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
        this.setName(name)
        this.generateID()
        //this.type = undefined
        //this.subTypes = new Set()
    }
    
    generateID() {
        let id = 'xxxxxxxx-xxxx-xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);});
        this.set('id', id)
    }

    getID(){
        if(this._prelimContent != null){
            return this._prelimContent.get('id')
        }else{
            return this.get('name')
        }
    }
    
    setName(name){
        this.set('name', name)
    }
    
    getName(){
        if(this._prelimContent != null){
            return this._prelimContent.get('name')
        }else{
            return this.get('name')
        }
    }
    
    /**
    * TODO: persist as map entry
    */
    setType(typeNode){
        this.typedBy = typeNode
        typeNode.getSubtypes().add(this)
    }
    
    /**
    * TODO: persist as map entry
    */
    untype(){
        this.typedBy.getSubtypes().delete(this)
        this.typedBy = undefined
    }
    
    /**
    * TODO: persist as map entry
    */
    getType(){
        return this.typedBy
    }
    
    /**
    * TODO: persist as map entry
    */
    getSubtypes(){
        return this.subTypes
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