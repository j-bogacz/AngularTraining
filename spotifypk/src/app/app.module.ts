import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { test } from './test.component';
import { MojKomponentComponent } from './moj-komponent/moj-komponent.component';
import { ListPlayListsComponent } from './list-play-lists/list-play-lists.component';
import { DetailPlayListComponent } from './detail-play-list/detail-play-list.component';

@NgModule({
  declarations: [
    AppComponent,
    test,
    MojKomponentComponent,
    ListPlayListsComponent,
    DetailPlayListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
