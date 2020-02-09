import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Note } from '../models/data.model';
import * as NoteActions from '../action/note.action';
import { NotedataService} from '../notedata.service';


@Component({
  selector: 'app-contolheader',
  templateUrl: './contolheader.component.html',
  styleUrls: ['./contolheader.component.css']
})
export class ContolheaderComponent implements OnInit {

  constructor(private store: Store<AppState> , private noteservice: NotedataService ) {
    this.storedata = this.store.select('Notes');
  }
  notedata;
  notetoremove;
  search;
  storedata;
  addNote(data) {
    if (data !== '') {
      this.store.dispatch(new NoteActions.AddNote({ body: data.Body , Composetime: data.Composetime }));
       
    }
  }

  removeNote(id) {
    if (typeof id !== 'undefined') {
      this.store.dispatch(new NoteActions.RemoveNote(id));
       
    }
  }

 searchText(text: string) {
  this.noteservice.searchtext(text);
 }

  ngOnInit() {
    this.noteservice.bodymethod$.subscribe(val => this.notedata = val );
    this.noteservice.notremovemethod$.subscribe(val => this.notetoremove = val );
    if (window.localStorage.getItem('notes')) {
      const notes: Note = JSON.parse(window.localStorage.getItem('notes'));
      this.store.dispatch(new NoteActions.UpdateNote(notes));
    }
  }


}
