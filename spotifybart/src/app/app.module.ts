import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { HighlightDirective } from './shared/highlight.directive';

import { SpotifyModule } from './spotify/spotify.module';
import {AuthService} from "./auth/auth.service";
import {WrapperComponent} from "./spotify/wrapper/wrapper.component";
import { WraperPlaylistComponent } from './wraper-playlist/wraper-playlist.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {PlaylistServiceService} from "./playlist-service.service";
import { FilterPipe } from './shared/filter.pipe';
import { TestComponent } from './test/test/test.component';
import { TestPipe } from './test/test.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: WrapperComponent},
  {path: 'playlist', component: WraperPlaylistComponent, children: [
    {path: '', component: DetailPlaylistComponent},
    {path: ':id', component: DetailPlaylistComponent}
  ]},
  {path: '**', redirectTo: 'search', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistComponent,
    HighlightDirective,
    WraperPlaylistComponent,
    HomeComponent,
    ErrorComponent,
    FilterPipe,
    TestComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SpotifyModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    PlaylistServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthService) {
    this.auth.getToken();
  }
}