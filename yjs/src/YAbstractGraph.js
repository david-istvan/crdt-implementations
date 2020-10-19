/**
 * Copyright (c) 2020
 *
 * @summary CRDT Graph specialization for Yjs. This is the entry point to customizing on the Y/Graph level.
 * @author Istvan David <hello@istvandavid.com>
 */

import * as Y from 'yjs'

export class YAbstractGraph extends Y.Map {
    
    constructor (entries) {
        super(entries)
    }
}