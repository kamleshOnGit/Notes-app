import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContolheaderComponent } from './contolheader/contolheader.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './action/note.reducer';
import { ShowtimePipe } from './showtime.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContolheaderComponent,
    NoteListComponent,
    NoteEditComponent,
    ShowtimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      Notes : reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
