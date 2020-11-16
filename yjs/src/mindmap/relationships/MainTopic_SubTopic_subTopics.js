import { Relationship } from '../../typesystem/logical/Relationship.js';
import { MindMap } from '../entities/MindMap.js';
import { Topic } from '../entities/Topic.js';

export class MainTopic_SubTopic_subTopics extends Relationship{

    constructor(mainTopic, subTopic){
        super('MainTopic_SubTopic_subTopics')
        this.setAggregation(true)
        this.setFromMin(1)
        this.setFromMax(1)
        this.setToMin(0)
        this.setToMax('inf')
        
        this.setFromEntity(mainTopic.getName())
        this.setToEntity(subTopic.getName())
    }
}