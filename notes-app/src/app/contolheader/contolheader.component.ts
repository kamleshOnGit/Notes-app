import {Component, OnInit, Input} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AppState} from '../app.state';
import {Observable} from 'rxjs';
import {Note} from '../models/data.model';
import * as NoteActions from '../action/note.action';
import {NotedataService} from '../notedata.service';

@Component({selector: 'app-contolheader', templateUrl: './contolheader.component.html', styleUrls: ['./contolheader.component.css']})
export class ContolheaderComponent implements OnInit {
  notedata;
  notetoremove;
  search;
  storedata;
  constructor(private store : Store < AppState >, private noteservice : NotedataService) {
    this.storedata = this
      .store
      .pipe(select('Notes'));

    if (window.localStorage.getItem('notes')) {
      const data: any = JSON.parse(window.localStorage.getItem('notes'));
      this
        .store
        .dispatch(new NoteActions.SetNote(data));
    }
 }

    addNote(data) {
      if (data !== '') {
        this
          .store
          .dispatch(new NoteActions.AddNote({body: data.Body, Composetime: data.Composetime}));
      }
      this.localstorage();
    }

    removeNote(id) {
      if (typeof id !== 'undefined') {
        this
          .store
          .dispatch(new NoteActions.RemoveNote(id));
      }
      this.localstorage();
    }

    searchText(text : string) {
      this
        .noteservice
        .searchtext(text);
    }

    localstorage() {
      setTimeout(() => {
        this
          .store
          .dispatch(new NoteActions.UpdateNote());
      }, 1000);
    }

    ngOnInit() {
      this
        .noteservice
        .bodymethod$
        .subscribe(val => this.notedata = val);
      this
        .noteservice
        .notremovemethod$
        .subscribe(val => this.notetoremove = val);
    }

  }
