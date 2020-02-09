import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotedataService {


  private bodysource = new Subject<string>();
  private noteremove = new Subject<string>();
  notremovemethod$ = this.noteremove.asObservable();
  bodymethod$ = this.bodysource.asObservable();

  constructor() {
  }


  bodychanged(content: any) {
    this.bodysource.next(content);
  }
 removeNote(content: any) {
  this.noteremove.next(content);
 }



}
