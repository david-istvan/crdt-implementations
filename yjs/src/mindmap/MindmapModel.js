import { Model } from '../typesystem/logical/Model.js';
import { Mindmap } from './Mindmap.js';
import { Topic } from './Topic.js';

export class MindmapModel extends Model {

    constructor(){
        super()
    }
    
    createMindmap(name){
        //console.log('hello2')
        this.mindmap = new Mindmap(name)
        //console.log('hello3')
        return this.mindmap
    }
}