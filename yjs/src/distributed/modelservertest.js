import { ModelServer } from './ModelServer.js';

console.log("test")

const server = new ModelServer()


const view1 = server.getModel()
const view2 = server.getModel()

console.log('> view1: addEntity("A")')
view1.addEntity('A')
console.log('> view1: getEntities(): ')
console.log(Array.from(view1.getEntities()))
console.log('> view2: getEntities(): ')
console.log(Array.from(view2.getEntities()), '\n')

console.log('> view1: addEntity("A")')
view1.addEntity('A')
console.log('> view1: getEntities(): ')
console.log(Array.from(view1.getEntities()))
console.log('> view2: getEntities(): ')
console.log(Array.from(view2.getEntities()), '\n')

console.log('> view2: addEntity("B")')
view2.addEntity('B')
console.log('> view1: getEntities(): ')
console.log(Array.from(view1.getEntities()))
console.log('> view2: getEntities(): ')
console.log(Array.from(view2.getEntities()), '\n')


const view3 = server.getModel()
console.log('> view3: addEntity("C")')
view3.addEntity('C')
console.log('> view1: getEntities(): ')
console.log(Array.from(view1.getEntities()))
console.log('> view2: getEntities(): ')
console.log(Array.from(view2.getEntities()))
console.log('> view3: getEntities(): ')
console.log(Array.from(view3.getEntities()), '\n')

console.log('> view3: removeEntity("C")')
view3.removeEntity('C')
console.log('> view3: getEntities(): ')
console.log(Array.from(view3.getEntities()), '\n')

console.log('> view3: addEdge("A", "B")')
view3.addEdge('A', 'B')
console.log('> view1: queryEntity("A")')
console.log(view1.queryEntity('A'))
console.log('> view2: queryEntity("A")')
console.log(view2.queryEntity('A'))
console.log('> view3: queryEntity("A")')
console.log(view3.queryEntity('A'), '\n')

console.log('> view3: queryEdge("A", "B")')
console.log(view3.queryEdge('A', 'B'))
console.log('> view3: queryEdge("B", "A")')
console.log(view3.queryEdge('B', 'A'), '\n')

console.log('> view3: getEdgesFrom("A")')
console.log(view3.getEdgesFrom('A'), '\n')

console.log('> view3: removeEdge("A", "B")')
view3.removeEdge('A', 'B')
console.log('> view3: getEdgesFrom("A")')
console.log(view3.getEdgesFrom('A'), '\n')

console.log('> view1: clearEntities(): ')
view1.clearEntities()
console.log('> view1: getEntities(): ')
console.log(Array.from(view1.getEntities()))
console.log('> view2: getEntities(): ')
console.log(Array.from(view2.getEntities()))
console.log('> view3: getEntities(): ')
console.log(Array.from(view3.getEntities()), '\n')


console.log('> view1: addEntity("A")')
view1.addEntity('A')
console.log('> view1: getEntities(): ')
console.log(Array.from(view1.getEntities()))
console.log('> view2: getEntities(): ')
console.log(Array.from(view2.getEntities()))
console.log('> view3: getEntities(): ')
console.log(Array.from(view3.getEntities()), '\n')

/*
console.log('> view1: modify property to blue')
view1.queryEntity('A')[0].setProperty('blue')
console.log('> view1: show property')
console.log(view1.queryEntity('A')[0].getProperty())
console.log('> view2: show property')
console.log(view2.queryEntity('A')[0].getProperty())
console.log('> view3: modify property to green')
view1.queryEntity('A')[0].setProperty('green')
console.log('> view1: show property')
console.log(view1.queryEntity('A')[0].getProperty())
console.log('> view2: show property')
console.log(view2.queryEntity('A')[0].getProperty())
console.log('> view3: show property')
console.log(view3.queryEntity('A')[0].getProperty())*/