import { Model } from '../typesystem/logical/Model.js';

const m1 = new Model('PNMeta')
const m2 = new Model('PNInstance')



console.log('m1.name: ', m1.getName())
console.log('m2.name: ', m2.getName())

console.log('m2.type: ', m2.getType())
console.log('m1.subtypes: ', m1.getSubtypes())

m2.setType(m1)
console.log('m2.type: ', m2.getType().getName())
console.log('m1.subtypes: ', m1.getSubtypes().values().next().value.getName())

m2.untype()
console.log('m2.type: ', m2.getType())
console.log('m1.subtypes: ', m1.getSubtypes())