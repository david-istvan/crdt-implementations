import { GraphDoc } from './GraphDoc.js';
import { YGraph } from './YGraph.js';

console.log("test")

const g = new GraphDoc("hello2")

g.hello()

console.log('g.myarray(0): ', g.getArray('myarray').get(0))
g.getArray('myarray').insert(0, ['APPLE'])
console.log('g.myarray(0): ', g.getArray('myarray').get(0))

console.log("=============")

console.log('g.map("first"): ', g.getMap('mymap').get('first'))
g.getMap('mymap').set('first', 'BANANA')
console.log('g.map("first"): ', g.getMap('mymap').get('first'))

console.log("=============")

console.log('g.graph("first"): ', g.getGraph('mygraph').get('first'))
g.getGraph('mygraph').set('first', 'PINEAPPLE')
console.log('g.graph("first"): ', g.getGraph('mygraph').get('first'))

console.log("==========================")
console.log("==========================")

console.log('> addVertex("A")')
g.getGraph('realgraph').addVertex('A')
console.log('> addVertex("B")')
g.getGraph('realgraph').addVertex('B')
console.log('> getVertices(): ')
console.log(Array.from(g.getGraph('realgraph').getVertices()))
console.log('> queryVertex("A")')
console.log(g.getGraph('realgraph').queryVertex('A'))
console.log('> queryVertex("B")')
console.log(g.getGraph('realgraph').queryVertex('B'))

console.log('> removeVertex("B")')
g.getGraph('realgraph').removeVertex('B')
console.log('> getVertices()')
console.log(Array.from(g.getGraph('realgraph').getVertices()))

console.log('> clearVertices()')
g.getGraph('realgraph').clearVertices()
console.log('> getVertices()')
console.log(Array.from(g.getGraph('realgraph').getVertices()))

console.log('> addVertex("A")')
g.getGraph('realgraph').addVertex('A')
console.log('> addVertex("B")')
g.getGraph('realgraph').addVertex('B')

console.log('> addEdge("A", "B")')
g.getGraph('realgraph').addEdge('A', 'B')
console.log('> queryVertex("A")')
console.log(g.getGraph('realgraph').queryVertex('A'))
console.log('> queryVertex("B")')
console.log(g.getGraph('realgraph').queryVertex('B'))

console.log('> queryEdge("A", "B")')
console.log(g.getGraph('realgraph').queryEdge('A', 'B'))
console.log('> queryEdge("B", "A")')
console.log(g.getGraph('realgraph').queryEdge('B', 'A'))

console.log('> getEdgesFrom("A")')
console.log(g.getGraph('realgraph').getEdgesFrom('A'))

console.log('> addVertex("C")')
g.getGraph('realgraph').addVertex('C')
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

console.log('> queryVertex("X")')
console.log(g.getGraph('realgraph').queryVertex('X'))
console.log('> removeEdge("A", "Y")')
g.getGraph('realgraph').removeEdge('A', 'Y')