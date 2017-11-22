import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ListPlaylistsComponent} from './list-playlists/list-playlists.component';
import {DetailPlaylistsComponent} from './detail-playlists/detail-playlists.component';
import {HighlightDirective} from './shared/highlight.directive';

import {SearchModule} from "./search/search.module";
import {AuthService} from "./auth/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SearchModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private spotifyAuth: AuthService) {
    spotifyAuth.getToken();
  }
}