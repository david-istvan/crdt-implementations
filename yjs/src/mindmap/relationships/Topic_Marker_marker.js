import { Relationship } from '../../typesystem/logical/Relationship.js';
import { MindMap } from '../entities/MindMap.js';
import { Topic } from '../entities/Topic.js';

export class Topic_Marker_marker extends Relationship{

    constructor(topic, marker){
        super('Topic_Marker_marker')
        this.setAggregation(false)
        this.setFromMin(0)
        this.setFromMax(1)
        this.setToMin(1)
        this.setToMax(1)
        
        this.setFromEntity(topic.getName())
        this.setToEntity(marker.getName())
    }
}