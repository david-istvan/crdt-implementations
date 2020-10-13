/**
 * Copyright (c) 2020
 *
 * @summary CRDT Graph abstraction for Yjs
 * @author Istvan David <hello@istvandavid.com>
 *
 * Created at     : 2020-10-12
 * Last modified  : 2020-10-13
 */

import * as Y from 'yjs'

export class YGraph extends Y.Array{
    
    constructor(data){
        super()
        this._data = data
    }
}
