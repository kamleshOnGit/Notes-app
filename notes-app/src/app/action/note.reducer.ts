import {Note} from '../models/data.model';
import {Action} from '@ngrx/store';
import * as NoteAction from './note.action';


// Section 1
const initialState: Note = {
    body: 'No Additional text',
    Composetime: `${new Date().getHours()}:${new Date().getMinutes()} `
};

// Section 2
export function reducer(state: Note[] = [initialState], action: NoteAction.Actions ) {



    // Section 3
    switch (action.type) {
        case NoteAction.ADD_NOTE:
            window.localStorage.setItem('notes' , JSON.stringify(state) );
            return [
                ...state,
                action.payload
            ];
        case NoteAction.UPDATE_NOTE:
            return [
                ...state,
                action.payload
            ];
        case NoteAction.REMOVE_NOTE:
            window.localStorage.setItem('notes' , JSON.stringify(state) );
            state.splice(action.payload, 1);
            return state;
        case NoteAction.EDIT_NOTE:
            window.localStorage.setItem('notes' , JSON.stringify(state) );
            state.splice(action.payloadindex, 1, action.payload);
            console.log( action.payload , action.payloadindex , state);
            return state;
        default:
            return state;
    }
}
