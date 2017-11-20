import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';



@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistComponent,
    DetailPlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
