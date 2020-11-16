/**
 * Copyright (c) 2020
 *
 * @summary Model type for the general logical type level.
 * @author Istvan David <hello@istvandavid.com>
 */

import * as Y from 'yjs'

import { Node } from './Node.js';

export class Relationship extends Node{

    constructor(name){
        super(name)
        this.isAggregation(false)
    }
    
    setAggregation(isAggregation){
        this.set('isAggregation', isAggregation)
    }
    
    isAggregation(){
        return this.get('isAggregation')
    }
    
    setFromMin(fromMin){
        this.set('fromMin', fromMin)
    }
    
    getFromMin(){
        return this.get('fromMin')
    }
    
    setFromMax(fromMax){
        this.set('fromMax', fromMax)
    }
    
    getFromMax(){
        return this.get('fromMax')
    }
    
    setFromEntity(entity){
        this.set('fromEntity', entity)
    }
    
    getFromEntity(){
        return this.get('fromEntity')
    }
    
    setToMin(toMin){
        this.set('toMin', toMin)
    }
    
    getToMin(){
        return this.get('toMin')
    }
    
    setToMax(toMax){
        this.set('toMax', toMax)
    }
    
    getToMax(){
        return this.get('toMax')
    }
    
    setToEntity(entity){
        this.set('toEntity', entity)
    }
    
    getToEntity(){
        return this.get('toNode')
    }
}