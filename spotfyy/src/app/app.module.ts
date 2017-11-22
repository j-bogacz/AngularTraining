import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPanelModule } from './search-panel/search-panel.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { HighlightDirective } from './shared/highlight.directive';
import {AuthService} from './auth/auth.service';
import {SearchPanelWrapperComponent} from './search-panel/search-panel-wrapper/search-panel-wrapper.component';
import { PlaylistsWrapperComponent } from './playlists-wrapper/playlists-wrapper.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: 'search', component: SearchPanelWrapperComponent},
  {path: 'playlists', component: PlaylistsWrapperComponent},
  {path: '', component: HomeComponent},
  {path: '*', component: ErrorComponent}
]

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
    SearchPanelModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthService) {
    this.auth.getToken();
  }

}
