import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPlaylistsComponent} from './list-playlists/list-playlists.component';
import {DetailPlaylistsComponent} from './detail-playlists/detail-playlists.component';
import {HighlightDirective} from '../shared/highlight.directive';
import {PlaylistsPanelComponent} from './playlists-panel/playlists-panel.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PlaylistService} from "./playlist.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PlaylistsPanelComponent
  ],
  providers: [
    PlaylistService
  ],
  declarations: [
    ListPlaylistsComponent,
    DetailPlaylistsComponent,
    HighlightDirective,
    PlaylistsPanelComponent]
})
export class PlaylistsModule {
}
