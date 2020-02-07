import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  list = [
    {title: 'Just adding note' ,  body: 'Trying to add some note' , time : new Date().setTime(34352335)} ,
    {title: 'Study angular' ,  body: 'Study angular' , time :new Date().setTime(797335)} ,
    {title: 'Revise angular' ,  body: 'Revise angualr thoroghly' , time : new Date().setTime(5454335)}
  ] ;

  todayDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
