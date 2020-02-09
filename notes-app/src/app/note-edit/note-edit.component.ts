import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Note } from '../models/data.model';
import * as NoteActions from '../action/note.action';
import { NotedataService} from '../notedata.service';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  sendbody: string;
  notebody;
  constructor(private store: Store<AppState> , private noteservice: NotedataService) {}
  time = new Date();

  sendBody(value: string) {

    const composetime =  { time: `${this.time.getHours()}:${this.time.getMinutes()}` , date : this.time.getDate()}  ;
    const id = this.time.getDate();
    const notedata = {
      Id: id,
      Body: value,
      Composetime: composetime
    };
    if (value !== '') {
      this.noteservice.bodychanged(notedata) ;
    }
    console.log(value , composetime );
  }

  ngOnInit() {
  }

}
