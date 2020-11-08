import { Entity } from '../typesystem/logical/Entity.js';

export class Mindmap extends Entity{

    constructor(name){
        super(name)
    }
    
    //This is a domain-specific behaviour
    addTopic(topic){
        this.setAttribute('topic', topic)
    }
    
    getTopics(){
        return this.topics
    }
}