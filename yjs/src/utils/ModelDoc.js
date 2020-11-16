/**
 * Copyright (c) 2020
 *
 * @summary TODO
 * @author Istvan David <hello@istvandavid.com>
 */
 
import * as Y from 'yjs'

export class ModelDoc extends Y.Doc{
    
    constructor(){
        super();
    }
    
    addModel(model){
        this.getArray('models').push([model])
    }
    
    getModel(){
        return this.getArray('models').get(0)
    }
    
    getEntities(){
        return this.getModel().get('entities')
    }
    
    addEntity(entity){
        this.getEntities().set(entity.getName(), entity)
    }
    
    getRelationships(){
        return this.getModel().get('relationships')
    }
    
    addRelationship(relationship){
        this.getRelationships().set(relationship.getName(), relationship)
    }
    
    findRelationship(from, to){
        //console.log('from: ', from)
        //console.log('to: ', to)
        for (let [key, value] of this.getRelationships().entries()) {
            //console.log("value.get('fromEntity'): ", value.get('fromEntity'))
            //console.log("value.get('toEntity'): ", value.get('toEntity'))
            if((value.get('fromEntity') == from) && (value.get('toEntity') == to)){
                //console.log('Gonna return relationship ', value.getName())
                return value
            }
        }
    }
}