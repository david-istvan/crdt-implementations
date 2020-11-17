import { ModelFactory } from '../utils/ModelFactory.js';
import { ModelDoc } from '../utils/ModelDoc.js';
import { MindMap } from './entities/MindMap.js';
import { CentralTopic } from './entities/CentralTopic.js';
import { MainTopic } from './entities/MainTopic.js';
import { SubTopic } from './entities/SubTopic.js';
import { Marker } from './entities/Marker.js';
import { MindMap_CentralTopic_topic } from './relationships/MindMap_CentralTopic_topic.js';
import { MindMap_Marker_markers } from './relationships/MindMap_Marker_markers.js';
import { CentralTopic_MainTopic_mainTopics } from './relationships/CentralTopic_MainTopic_mainTopics.js';
import { MainTopic_SubTopic_subTopics } from './relationships/MainTopic_SubTopic_subTopics.js';
import { Topic_Marker_marker } from './relationships/Topic_Marker_marker.js';

import * as Y from 'yjs';

//console.log('hello1')

const serverDoc = new ModelDoc()
const clientDoc = new ModelDoc()

serverDoc.on('update', update => {
  Y.applyUpdate(clientDoc, update)
})

clientDoc.on('update', update => {
  Y.applyUpdate(serverDoc, update)
})

//console.log('hello2')

const mindmap = new MindMap('myMindmap')
//console.log('hello3')

clientDoc.addModel(mindmap)
//console.log('hello4')
const centralTopic = new CentralTopic('myCentralTopic')
//console.log('hello4.5')
clientDoc.addEntity(centralTopic)
//console.log('hello5')
centralTopic.setAttribute('theme', 'general')
centralTopic.setAttribute('priority', 'low')

/*
console.log('clientDoc')
console.log(clientDoc.getEntities().get('myCentralTopic').get('theme'))
console.log('serverDoc')
console.log(serverDoc.getEntities().get('myCentralTopic').get('theme'))
*/

//console.log('hello6')

const centralTopicLink = new MindMap_CentralTopic_topic(mindmap, centralTopic)

//console.log('hello7')

clientDoc.addRelationship(centralTopicLink)
//console.log('hello8')

/*
console.log('Client doc relationships:')
console.log(clientDoc.getRelationships().values().next().value.isAggregation())
//console.log('hello9')

console.log('Server doc relationships:')
console.log(serverDoc.getRelationships().values().next().value.get('isAggregation'))
//console.log('hello10')
*/

function logModel(side){
    if(side == 'client'){
        console.log('=====client side=====')
        
        console.log('>Model ', clientDoc.getModel().getName())
        for (let [key, value] of clientDoc.getEntities()) {
            //console.log(key)
            let relationship = clientDoc.findRelationship(clientDoc.getModel().getName(), key)
            //console.log(relationship)
            if(relationship != undefined){
                console.log('\t', (relationship.isAggregation() ? '<>' : ''), '---[', relationship.getName(), ']--->', key);
            }
        }
        for (let [k1, v1] of clientDoc.getEntities()) {
            console.log('>Entity ', k1)
            for (let [k2, v2] of clientDoc.getEntities()) {
                if(k1 == k2){
                    continue
                }
                //console.log(k1, ' - ', k2)
                let relationship = clientDoc.findRelationship(k1, k2)
                //console.log(relationship)
                if(relationship != undefined){
                    console.log('\t', (relationship.isAggregation() ? '<>' : ''), '---[', relationship.getName(), ']--->', k2);
                }
            }
        }
        console.log('=================================\n')
    }else if(side == 'server'){
        console.log('=====server side=====')
        
        console.log('>Model ', serverDoc.getModel().get('name'))
        for (let [key, value] of serverDoc.getEntities()) {
            //console.log(key)
            let relationship = serverDoc.findRelationship(serverDoc.getModel().get('name'), key)
            //console.log(relationship.get('name'))
            //console.log(relationship.get('isAggregation'))
            if(relationship != undefined){
                console.log('\t', (relationship.get('isAggregation') ? '<>' : ''), '---[', relationship.get('name'), ']--->', key);
            }
        }
        for (let [k1, v1] of serverDoc.getEntities()) {
            console.log('>Entity ', k1)
            for (let [k2, v2] of serverDoc.getEntities()) {
                if(k1 == k2){
                    continue
                }
                //console.log(k1, ' - ', k2)
                let relationship = serverDoc.findRelationship(k1, k2)
                //console.log(relationship)
                if(relationship != undefined){
                    console.log('\t', (relationship.get('isAggregation') ? '<>' : ''), '---[', relationship.get('name'), ']--->', k2);
                }
            }
        }
        console.log('=================================\n')
    }else{
        console.error('ERROR: Must be either client or server side.')
    }
}


logModel('client')
logModel('server')

console.log('\nADDING MARKER\n')

const marker = new Marker()
clientDoc.addEntity(marker)
const markerLink = new MindMap_Marker_markers(mindmap, marker)
clientDoc.addRelationship(markerLink)
const markerLink2 = new Topic_Marker_marker(centralTopic, marker)
clientDoc.addRelationship(markerLink2)

logModel('client')
logModel('server')

/*
console.log('===============================================')
console.log(clientDoc.getModel().getName())
console.log(serverDoc.getModel().get('name'))
console.log('===============================================')
console.log(clientDoc.getEntities())
console.log(serverDoc.getEntities())
*/