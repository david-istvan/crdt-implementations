import { GraphDoc } from './GraphDoc.js';
//import { YGraph } from './YGraph.js';

console.log("test")

const g = new GraphDoc("hello2")

g.hello()

console.log('g.myarray(0): ', g.getArray('myarray').get(0))
g.getArray('myarray').insert(0, ['APPLE'])
console.log('g.myarray(0): ', g.getArray('myarray').get(0))

g.getGraph('mygraph').insert(0, ['ORANGE'])
console.log('g.mygraph(0): ', g.getGraph('mygraph').get(0))