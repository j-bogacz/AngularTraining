import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ListPlaylistsComponent} from './list-playlists/list-playlists.component';
import {DetailPlaylistsComponent} from './detail-playlists/detail-playlists.component';
import {HighlightDirective} from './shared/highlight.directive';

import {AlbumFinderModule} from './album-finder/album-finder.module';
import {SpotifyAccessorAuthenticationService} from "./album-finder/spotify-accessor-authentication.service";


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
    AlbumFinderModule
  ],
  providers: [SpotifyAccessorAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private spotifyAccessorAuthenticationService: SpotifyAccessorAuthenticationService) {
    var token = this.spotifyAccessorAuthenticationService.GetToken();
    console.log("Spotify access token: ", token);
  }
}
