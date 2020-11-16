import { Relationship } from '../../typesystem/logical/Relationship.js';
import { MindMap } from '../entities/MindMap.js';
import { Topic } from '../entities/Topic.js';

export class MindMap_Marker_markers extends Relationship{

    constructor(mindMap, marker){
        super('MindMap_Marker_markers')
        this.setAggregation(true)
        this.setFromMin(1)
        this.setFromMax(1)
        this.setToMin(0)
        this.setToMax('inf')
        
        this.setFromEntity(mindMap.getName())
        this.setToEntity(marker.getName())
    }
}