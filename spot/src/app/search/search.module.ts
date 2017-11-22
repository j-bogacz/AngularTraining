import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchBarComponent} from './search-bar/search-bar.component';
import {GridAlbumsComponent} from './grid-albums/grid-albums.component';
import {DetailAlbumComponent} from './detail-album/detail-album.component';
import {SearchWrapperComponent} from './search-wrapper/search-wrapper.component';
import {SpotifyService} from './spotify.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    SearchBarComponent,
    GridAlbumsComponent,
    DetailAlbumComponent,
    SearchWrapperComponent
  ],
  exports: [
    SearchWrapperComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class SearchModule {
}
