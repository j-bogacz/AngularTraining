import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { HighlightDirective } from './shared/highlight.directive';

import { SearchMusicModule } from './search-music/search-music.module';
import {AuthService} from './auth/auth.service';
import {WraperSearchAlbumComponent} from './search-music/wraper-search-album/wraper-search-album.component';
import { WraperPlaylistsComponent } from './wraper-playlists/wraper-playlists.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PlaylistService } from './playlist.service';
import { FilterPipe } from './shared/filter.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: WraperSearchAlbumComponent},
  {path: 'playlists', component: WraperPlaylistsComponent, children: [
    {path: '', component: DetailPlaylistComponent },
    {path: ':id', component: DetailPlaylistComponent}
  ]},
  {path: 'playlists/:id/:type', component: DetailPlaylistComponent},
  {path: '**', redirectTo: 'search', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistComponent,
    HighlightDirective,
    WraperPlaylistsComponent,
    HomeComponent,
    ErrorComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SearchMusicModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthService){
    this.auth.getToken();
  }
}
