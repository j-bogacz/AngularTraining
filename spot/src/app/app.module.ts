import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { HighlightDirective } from './shared/highlight.directive';

import { SearchModule } from './search/search.module';
import { AuthService } from './auth/auth.service';
import {SearchWrapperComponent} from './search/search-wrapper/search-wrapper.component';
import { PlaylistsWrapperComponent } from './playlists-wrapper/playlists-wrapper.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {PlaylistsService} from "./playlists.service";

const routes: Routes = [
  {path: 'search', component: SearchWrapperComponent},
  {path: 'playlist', component: PlaylistsWrapperComponent, children: [
    // {path: '', component: DetailPlaylistComponent},
    {path: ':id', component: DetailPlaylistComponent}
  ]},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'search', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistComponent,
    HighlightDirective,
    PlaylistsWrapperComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SearchModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    PlaylistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private auth: AuthService) {
    this.auth.getToken();
  }
}
