/**
 * Copyright (c) 2020
 *
 * @summary Factory support for modeling.
 * @author Istvan David <hello@istvandavid.com>
 */
 
import * as Y from 'yjs'

export class ModelFactory {

    static createRelationship(relationship, fromNode, fromPort, toNode, toPort){
        console.log('setting relationship')
        
        //console.log('setting fromPort')
        //console.log(fromNode.getName(), ' / ', fromPort)
        //fromNode.set(fromPort, relationship)
        
        console.log('setting fromPort in rel')
        relationship.setFromNode(fromNode)
        relationship.setFromPort(fromPort)
        
        //console.log('setting toPort')
        //console.log(toNode.getName(), ' / ', toPort)
        //toNode.set(toPort, relationship)
        
        console.log('setting toPort in rel')
        relationship.setToNode(toNode)
        relationship.setToPort(toPort)
    }
}