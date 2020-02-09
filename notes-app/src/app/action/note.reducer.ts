import { Note } from '../models/data.model';
import { Action } from '@ngrx/store';
import * as NoteAction from './note.action';

// Section 1
const initialState: Note = { Id: 1, body: 'No Additional text' , Composetime: `${new Date().getHours()}:${new Date().getMinutes()} ` };


// Section 2
export function reducer(state: Note[] = [initialState], action: NoteAction.Actions) {

    // Section 3
    switch (action.type) {
        case NoteAction.ADD_NOTE:
            return [...state, action.payload];
        case NoteAction.REMOVE_NOTE:
        state.splice( action.payload , 1);
        return state;
        default:
            return state;
    }
}
