/**
 * Copyright (c) 2020
 *
 * @summary Model type for the general logical type level.
 * @author Istvan David <hello@istvandavid.com>
 */

import * as Y from 'yjs'

import { Node } from './Node.js';

export class Relationship extends Node{

    constructor(name){
        super(name)
    }
}