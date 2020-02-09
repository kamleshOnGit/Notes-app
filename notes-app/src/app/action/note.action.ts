import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Note} from '../models/data.model';

export const ADD_NOTE = '[Note] Add';
export const REMOVE_NOTE = '[Note] Remove';
export const EDIT_NOTE = '[Note] Edit';
export const UPDATE_NOTE = '[Note] Update';

export class AddNote implements Action {
    readonly type = ADD_NOTE;

    constructor(public payload: Note) {}
}

export class UpdateNote implements Action {
    readonly type = UPDATE_NOTE;

    constructor(public payload: Note) {}
}

export class RemoveNote implements Action {
    readonly type = REMOVE_NOTE;

    constructor(public payload: number) {}
}

export class EditNote implements Action {
    readonly type = EDIT_NOTE;

    constructor(public payload: any , public payloadindex: number) {}
}


export type Actions = AddNote | RemoveNote | EditNote | UpdateNote ;
