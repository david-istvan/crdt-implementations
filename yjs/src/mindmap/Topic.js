import { Entity } from '../typesystem/logical/Entity.js';

export class Topic extends Entity{
    constructor(name){
        super(undefined)
        this.name = name
    }
}