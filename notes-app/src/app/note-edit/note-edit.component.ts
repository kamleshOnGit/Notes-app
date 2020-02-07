import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  noteheader = 'angular project';
  notebody = 'angular project building planing';
  constructor() { }

  ngOnInit() {
  }

}
