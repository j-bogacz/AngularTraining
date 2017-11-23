import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { SearchWrapperComponent } from './searchapp/search-wrapper/search-wrapper.component';
import { WraperPlayListsComponent } from './wraper-play-lists/wraper-play-lists.component';

import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { HighlightDirective } from './shared/highlight.directive';
import { SearchappModule } from './searchapp/searchapp.module';
import { AuthService } from "./auth/auth.service";
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PlayListServiceService } from './play-list-service.service';
import { FilterPipe } from './shared/filter.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'search', component: SearchWrapperComponent },
  {path: 'playLists', component: WraperPlayListsComponent, children: [
      {path: '', component: DetailPlaylistComponent },
      {path: ':id', component: DetailPlaylistComponent },
  ]},

  {path: '**', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    DetailPlaylistComponent,
    HighlightDirective,
    WraperPlayListsComponent,
    HomeComponent,
    ErrorComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SearchappModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    PlayListServiceService,
    ChildrenOutletContexts
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(private auth: AuthService) {
    this.auth.getToken();
  }
}
