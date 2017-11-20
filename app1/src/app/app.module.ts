import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListPlayListComponent } from './list-play-list/list-play-list.component';
import { DetailPlayListComponent } from './detail-play-list/detail-play-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlayListComponent,
    DetailPlayListComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
