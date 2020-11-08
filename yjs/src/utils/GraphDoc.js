/**
 * Copyright (c) 2020
 *
 * @summary CRDT Graph capability extension for the Yjs session primitive (Doc). Currently not in use.
 * @author Istvan David <hello@istvandavid.com>
 */
 
import * as Y from 'yjs'
import { YGraph } from '../typesystem/physical/YGraph.js'

export class GraphDoc extends Y.Doc{
    
    constructor(data){
        super();
        this._data = data;
    }

    hello(){
        console.log(this._data)
    }

    getGraph (name = '') { /* singleton graph intance*/
        if(this._graphInstance === undefined){
            this._graphInstance = this.get(name, YGraph)
        }
        return this._graphInstance
    }
}