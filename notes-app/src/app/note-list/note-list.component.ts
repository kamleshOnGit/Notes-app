import { Component, OnInit } from '@angular/core';
import { NotedataService } from '../notedata.service';
import { Observable } from 'rxjs' ;
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Note } from '../models/data.model';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  newnote: Observable<Note[]>;
  
  showtime;
  giventime;
  constructor(private store: Store<AppState> , private noteservice: NotedataService) {
    this.newnote = store.select('Notes');
  }

  removeNote(item) {
    this.noteservice.removeNote(item);
  }

  ngOnInit() {
  }

}
