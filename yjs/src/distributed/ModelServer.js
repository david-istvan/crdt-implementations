/**
 * Copyright (c) 2020
 *
 * @summary Local model repository functionality.
 * @author Istvan David <hello@istvandavid.com>
 */

import { GraphDoc } from '../utils/GraphDoc.js';
import { YGraph } from '../typesystem/physical/YGraph.js';
import * as Y from 'yjs';

export class ModelServer{

    constructor(){
        console.log("creating shared graphdoc")
        this.centralGraphDoc = new GraphDoc()
        console.log("creating graph")
        this.model = this.centralGraphDoc.getGraph('myModel')
        console.log("created shared graphdoc and graph")
    }
    
    /**
    * @deprecated
    */
    getModel(){
        return this.model
    }
    
    getDoc(){
        return this.centralGraphDoc
    }
    
    connectToModel(remoteYDoc){
        console.log('connecting remote to shared model')
        this.centralGraphDoc.on('update', update => {
            console.log('change in the remote model observered on the server')
            console.log(update)
            Y.applyUpdate(remoteYDoc, update)
        })
        console.log('connected remote to shared model')
    }
}