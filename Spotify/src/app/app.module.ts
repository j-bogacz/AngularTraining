import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ListPlaylistsComponent} from './playlists/list-playlists/list-playlists.component';
import {DetailPlaylistsComponent} from './playlists/detail-playlists/detail-playlists.component';
import {HighlightDirective} from './shared/highlight.directive';

import {AlbumFinderModule} from './album-finder/album-finder.module';
import {AlbumFinderComponent} from "./album-finder/album-finder.component";
import {SpotifyAccessorAuthenticationService} from "./error/spotify-accessor-authentication.service";
import {PlaylistsComponent} from './playlists/playlists.component';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {PlaylistsAccessorService} from "./playlists/playlists-accessor.service";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: AlbumFinderComponent},
  {
    path: 'playlists', component: PlaylistsComponent, children: [
    {path: '', component: PlaylistsComponent},
    {path: ':id', component: DetailPlaylistsComponent},

  ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistsComponent,
    HighlightDirective,
    PlaylistsComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlbumFinderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyAccessorAuthenticationService, PlaylistsAccessorService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private spotifyAccessorAuthenticationService: SpotifyAccessorAuthenticationService) {
    var token = this.spotifyAccessorAuthenticationService.GetToken();
    console.log("Spotify access token: ", token);
  }
}
