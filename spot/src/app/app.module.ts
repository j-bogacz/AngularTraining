import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
