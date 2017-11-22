import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DetailPlaylistsComponent} from './playlists/detail-playlists/detail-playlists.component';

import {SearchModule} from './search/search.module';
import {AuthService} from './auth/auth.service';
import {RouterModule, Routes} from '@angular/router';
import {SearchPanelComponent} from './search/search-panel/search-panel.component';
import {PlaylistsPanelComponent} from './playlists/playlists-panel/playlists-panel.component';
import {PlaylistsModule} from "./playlists/playlists.module";
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchPanelComponent},
  {
    path: 'playlists', component: PlaylistsPanelComponent, children: [
    {path: '', component: DetailPlaylistsComponent},
    {path: ':id', component: DetailPlaylistsComponent}
  ]
  },
  {path: '**', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    PlaylistsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private spotifyAuth: AuthService) {
    spotifyAuth.getToken();
  }
}
