import * as Y from 'yjs'
import { YGraph } from './YGraph.js'

export class GraphDoc extends Y.Doc{
    
    constructor(data){
        super();
        this._data = data;
    }
    
    hello(){
        console.log(this._data)
    }
    
    getGraph (name = '') {
        return this.get(name, YGraph)
    }
}
