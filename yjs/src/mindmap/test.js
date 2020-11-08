import { MindmapModel } from './MindmapModel.js';
import { Mindmap } from './Mindmap.js';
import { Topic } from './Topic.js';
import * as Y from 'yjs';

//console.log('hello1')

const serverDoc = new Y.Doc()
const clientDoc = new Y.Doc()

serverDoc.on('update', update => {
  Y.applyUpdate(clientDoc, update)
})

clientDoc.on('update', update => {
  Y.applyUpdate(serverDoc, update)
})

//const model = new MindmapModel()
//const mindmap = model.createMindmap('myMindmap')

console.log('======================================')
console.log('client doc:')
console.log(clientDoc)
console.log('server doc:')
console.log(serverDoc)
console.log('======================================')

const mindmap = new Mindmap('myMindmap')

console.log(mindmap)

/*

clientDoc.getArray('mindmaps').insert(0, [mindmap])

console.log('======================================')
console.log('client doc:')
console.log(clientDoc)
console.log('server doc:')
console.log(serverDoc)
console.log('======================================')

//console.log(mindmap)

const topic = new Topic('t1')
topic.setAttribute('theme', 'general')
topic.setAttribute('priority', 'high')

clientDoc.getArray('mindmaps').get(0).addTopic(topic)
//clientDoc.getArray('mindmaps').get(0).setAttribute('topic', topic)

console.log('======================================')
console.log('clientDoc.getArray("mindmaps").get(0):')
console.log(clientDoc.getArray('mindmaps').get(0))
console.log('serverDoc.getArray("mindmaps").get(0):')
console.log(serverDoc.getArray('mindmaps').get(0))
console.log('======================================')

console.log('======================================')
console.log('clientDoc.getArray("mindmaps").get(0).get("topic").get("priority"):')
console.log(clientDoc.getArray('mindmaps').get(0).get('topic').get('priority'))
console.log('serverDoc.getArray("mindmaps").get(0).get("topic").get("priority"):')
console.log(serverDoc.getArray('mindmaps').get(0).get('topic').get('priority'))
console.log('======================================')

serverDoc.getArray('mindmaps').get(0).get('topic').set('priority', 'low')

console.log('======================================')
console.log('clientDoc.getArray("mindmaps").get(0).get("topic").get("priority"):')
console.log(clientDoc.getArray('mindmaps').get(0).get('topic').get('priority'))
console.log('serverDoc.getArray("mindmaps").get(0).get("topic").get("priority"):')
console.log(serverDoc.getArray('mindmaps').get(0).get('topic').get('priority'))
console.log('======================================')

//console.log(mindmap)*/