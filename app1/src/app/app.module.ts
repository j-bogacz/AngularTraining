import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { HighlightDirective } from './shared/highlight.directive';

import { AlbumModule } from './album/album.module';
import { AuthService} from './album/auth/auth.service';
import { AlbumWrapperComponent} from './album/album-wrapper/album-wrapper.component';
import { WrapperPlaylistComponent } from './wrapper-playlist/wrapper-playlist.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'search', component: AlbumWrapperComponent},
  { path: 'playlist', component: WrapperPlaylistComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistComponent,
    HighlightDirective,
    WrapperPlaylistComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AlbumModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private  auth: AuthService){
    this.auth.getToken();
  }
}
