import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  list = [
    {title: 'Just adding note' ,  body: 'Trying to add some note'} ,
    {title: 'Study angular' ,  body: 'Study angular'} ,
    {title: 'Revise angular' ,  body: 'Revise angualr thoroghly'}
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
