import { GraphDoc } from './GraphDoc.js';
import { YGraph } from './YGraph.js';

export class ModelServer{

    constructor(){
        this.model = new GraphDoc().getGraph('myModel')
    }
    
    getModel(){
        return this.model
    }
}