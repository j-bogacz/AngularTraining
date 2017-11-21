import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { GridAlbumsComponent } from './grid-albums/grid-albums.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';
import {SearchWrapperComponent} from './search-wrapper/search-wrapper.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchBarComponent,
    GridAlbumsComponent,
    DetailAlbumComponent,
    SearchWrapperComponent
  ],
  exports: [
    SearchWrapperComponent
  ]
})
export class SearchModule { }
