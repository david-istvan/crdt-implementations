import { ModelServer } from './ModelServer.js';

console.log("test")

const server = new ModelServer()


const view1 = server.getModel()
const view2 = server.getModel()

console.log('> view1: addVertex("A")')
view1.addVertex('A')
console.log('> view1: getVertices(): ')
console.log(Array.from(view1.getVertices()))
console.log('> view2: getVertices(): ')
console.log(Array.from(view2.getVertices()), '\n')

console.log('> view2: addVertex("B")')
view2.addVertex('B')
console.log('> view1: getVertices(): ')
console.log(Array.from(view1.getVertices()))
console.log('> view2: getVertices(): ')
console.log(Array.from(view2.getVertices()), '\n')

const view3 = server.getModel()
console.log('> view3: addEdge("A", "B")')
view3.addEdge('A', 'B')
console.log('> view1: queryVertex("A")')
console.log(view1.queryVertex('A'))
console.log('> view2: queryVertex("A")')
console.log(view2.queryVertex('A'))
console.log('> view3: queryVertex("A")')
console.log(view3.queryVertex('A'))