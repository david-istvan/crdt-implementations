/**
 * Copyright (c) 2020
 *
 * @summary Generic Vertex class for graph-based models. It should extend the YMap type and allow adding domain-specific information in key-value pairs using generative techniques.
 * @author Istvan David <hello@istvandavid.com>
 */

export class Vertex{

    constructor(id){
        this.id = id
    }
    
    getID(){
        return this.id
    }
    
    equals(vertex){
        return this.id === vertex.id
    }
}