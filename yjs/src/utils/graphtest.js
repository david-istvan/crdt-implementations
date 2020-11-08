import { GraphDoc } from './GraphDoc.js';
import { YGraph } from '../typesystem/physical/YGraph.js';

console.log("test")

const g = new GraphDoc("hello")


console.log('> addEntity("A")')
g.getGraph('realgraph').addEntity('A')
console.log('> addEntity("B")')
g.getGraph('realgraph').addEntity('B')
console.log('> getVertices(): ')
console.log(Array.from(g.getGraph('realgraph').getVertices()))
console.log('> queryEntity("A")')
console.log(g.getGraph('realgraph').queryEntity('A'))
console.log('> queryEntity("B")')
console.log(g.getGraph('realgraph').queryEntity('B'))

console.log('> removeEntity("B")')
g.getGraph('realgraph').removeEntity('B')
console.log('> getVertices()')
console.log(Array.from(g.getGraph('realgraph').getVertices()))

console.log('> clearVertices()')
g.getGraph('realgraph').clearVertices()
console.log('> getVertices()')
console.log(Array.from(g.getGraph('realgraph').getVertices()))

console.log('> addEntity("A")')
g.getGraph('realgraph').addEntity('A')
console.log('> addEntity("B")')
g.getGraph('realgraph').addEntity('B')

console.log('> addEdge("A", "B")')
g.getGraph('realgraph').addEdge('A', 'B')
console.log('> queryEntity("A")')
console.log(g.getGraph('realgraph').queryEntity('A'))
console.log('> queryEntity("B")')
console.log(g.getGraph('realgraph').queryEntity('B'))

console.log('> queryEdge("A", "B")')
console.log(g.getGraph('realgraph').queryEdge('A', 'B'))
console.log('> queryEdge("B", "A")')
console.log(g.getGraph('realgraph').queryEdge('B', 'A'))

console.log('> getEdgesFrom("A")')
console.log(g.getGraph('realgraph').getEdgesFrom('A'))

console.log('> addEntity("C")')
g.getGraph('realgraph').addEntity('C')
console.log('> getVertices()')
console.log(Array.from(g.getGraph('realgraph').getVertices()))
console.log('> addEdge("A", "C")')
g.getGraph('realgraph').addEdge('A', 'C')
console.log('> getEdgesFrom("A")')
console.log(g.getGraph('realgraph').getEdgesFrom('A'))
console.log('> removeEdge("A", "B")')
g.getGraph('realgraph').removeEdge('A', 'B')
console.log('> getEdgesFrom("A")')
console.log(g.getGraph('realgraph').getEdgesFrom('A'))

console.log('> queryEntity("X")')
console.log(g.getGraph('realgraph').queryEntity('X'))
console.log('> removeEdge("A", "Y")')
g.getGraph('realgraph').removeEdge('A', 'Y')