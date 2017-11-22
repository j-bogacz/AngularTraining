import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { HighlightDirective } from './shared/highlight.directive';
import {SearchMusicModule} from './search-music/search-music.module';
import {AuthService} from "./auth/atuh.service";
import {RouterModule, Routes} from "@angular/router";
import {WrapperComponent} from "./search-music/wrapper/wrapper.component";
import { WrapperPlaylistComponent } from './wrapper-playlist/wrapper-playlist.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {PlaylistService} from "./playlist.service";
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  {
    path: 'search',
    component: WrapperComponent
  },
  {
    path: 'playlist',
    component: WrapperPlaylistComponent,
    children: [
      {path: '', component: DetailPlaylistComponent},
      {path: ':id', component: DetailPlaylistComponent}
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'search',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistComponent,
    HighlightDirective,
    WrapperPlaylistComponent,
    HomeComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SearchMusicModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthService){
    this.auth.getToken();
  }
}
