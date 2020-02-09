import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotedataService {


  private bodysource = new Subject<string>();
  private noteremove = new Subject<string>();
  private editnote = new Subject<any>();
  private editindex = new Subject<any>();
  private searchText = new Subject<string>();
  notremovemethod$ = this.noteremove.asObservable();
  bodymethod$ = this.bodysource.asObservable();
  editnotemethod$ = this.editnote.asObservable();
  editnoteindexmethod$ = this.editindex.asObservable();
  searchmeathod$ = this.searchText.asObservable();

  constructor() {
  }


  bodychanged(content: any) {
    this.bodysource.next(content);
  }
 removeNote(content: any) {
  this.noteremove.next(content);
 }

 editNote(content: any , index: any) {
  this.editnote.next(content);
  this.editindex.next(index);
 }

 searchtext(text: string ) {
   this.searchText.next(text);
 }

}
