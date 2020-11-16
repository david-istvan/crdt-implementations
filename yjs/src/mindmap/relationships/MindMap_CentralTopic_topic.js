import { Relationship } from '../../typesystem/logical/Relationship.js';
import { MindMap } from '../entities/MindMap.js';
import { Topic } from '../entities/Topic.js';

export class MindMap_CentralTopic_topic extends Relationship{

    constructor(mindMap, centralTopic){
        super('MindMap_CentralTopic_topic')
        this.setAggregation(true)
        this.setFromMin(1)
        this.setFromMax(1)
        this.setToMin(0)
        this.setToMax(1)
        
        this.setFromEntity(mindMap.getName())
        this.setToEntity(centralTopic.getName())
    }
}