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

//console.log('graph1: adding vertex A')
//g.getGraph('mygraph').addVertex('A')
//console.log(g.getGraph('mygraph'))
//console.log('graph 1 vertices: ', g.getGraph('mygraph').getVertices())