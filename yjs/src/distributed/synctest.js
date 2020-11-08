import { ModelServer } from './ModelServer.js';
import { GraphDoc } from '../utils/GraphDoc.js';
import { YGraph } from '../typesystem/physical/YGraph.js';
import * as Y from 'yjs';


console.log("test")
console.log("creating server")
const server = new ModelServer()

console.log("creating local graphdoc")
const localGraphDoc = new GraphDoc()
const localModel = localGraphDoc.getGraph('myModel')



console.log("connecting to server")
server.connectToModel(localGraphDoc)

console.log('connecting local to shared model')
localGraphDoc.on('update', update => {
    console.log('change in the shared model observered locally')
    Y.applyUpdate(server.getDoc(), update)
})
console.log('connected local to shared model')



console.log('> local graph entities:')
console.log(Array.from(localModel.getEntities()))
console.log('> remote graph entities:')
console.log(Array.from(server.getModel().getEntities()))


/*console.log('> adding text property to local model:')
localModel.addTextProperty('A')

console.log('> local graph text property:')
console.log(localModel.getTextProperty())
console.log('> remote graph text property:')
console.log(server.getModel().getTextProperty())
*/
/*
console.log('> adding entity to local model:')
localModel.addEntity('A')

console.log('> local graph entities:')
console.log(Array.from(localModel.getEntities()))
console.log('> remote graph entities:')
console.log(Array.from(server.getModel().getEntities()))
*/