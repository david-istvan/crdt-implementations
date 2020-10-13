const Automerge = require('automerge')
const CRDTGraph = require('./crdtgraph.js');

var graph = CRDTGraph.create()

console.log('\n\n====================================')
console.log('graph 1 data: ', graph.data)

console.log('graph1: adding vertex A')
graph.addVertex("A")
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph1: adding vertex A')
graph.addVertex("A")
console.log('graph 1 vertices: ', graph.getVertices())

console.log('graph1: adding vertex B')
graph.addVertex("B")
console.log('graph 1 vertices: ', graph.getVertices())


console.log('\n====================================')
console.log('Joining graph 1 from the local copy "graph 2"')
var graph2 = CRDTGraph.join(graph)

console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())

console.log('\n====================================')

console.log('graph1: adding vertex C')
graph.addVertex("C")
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())

console.log('\n====================================')
console.log('graph2: adding vertex D')
graph2.addVertex("D")
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())

console.log('\n====================================')

console.log('queryVertex("A"):')
console.log(graph.queryVertex('A'))
console.log('\n')
console.log('removing vertex("A") from graph 1: ')
graph.removeVertex('A')
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())
console.log('\n')
console.log('removing vertex("C") from graph 2: ')
graph2.removeVertex('C')
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())
console.log('\n')
console.log('clearVertices from graph 1')
graph.clearVertices()
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())

console.log('\n')
console.log('re-adding vertices')
graph.addVertex("A")
graph2.addVertex("B")
graph.addVertex("C")
graph2.addVertex("D")
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())

console.log('\n====================================')
console.log('add edge from A to B in graph 1')
graph.addEdge('A', 'B')
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())
console.log('add edge from A to B in graph 1')
graph.addEdge('A', 'B')
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())

console.log('add edge from A to C in graph 2')
graph2.addEdge('A', 'C')
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())

console.log('remove edge from A to B in graph 1')
graph.removeEdge('A', 'B')
console.log('graph 1 vertices: ', graph.getVertices())
console.log('graph 2 vertices: ', graph2.getVertices())