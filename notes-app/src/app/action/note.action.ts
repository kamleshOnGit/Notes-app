import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Note} from '../models/data.model';

export const ADD_NOTE = '[Note] Add';
export const REMOVE_NOTE = '[Note] Remove';

export class AddNote implements Action {
    readonly type = ADD_NOTE;

    constructor(public payload: Note) {}
}

export class RemoveNote implements Action {
    readonly type = REMOVE_NOTE;

    constructor(public payload: number) {}
}


export type Actions = AddNote | RemoveNote;
