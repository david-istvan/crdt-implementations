import { Relationship } from '../../typesystem/logical/Relationship.js';
import { MindMap } from '../entities/MindMap.js';
import { Topic } from '../entities/Topic.js';

export class CentralTopic_MainTopic_mainTopics extends Relationship{

    constructor(centralTopic, mainTopic){
        super('CentralTopic_MainTopic_mainTopics')
        this.setAggregation(true)
        this.setFromMin(1)
        this.setFromMax(1)
        this.setToMin(0)
        this.setToMax('inf')
        
        this.setFromEntity(centralTopic.getName())
        this.setToEntity(mainTopic.getName())
    }
}