import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { WraperSearchAlbumComponent } from './wraper-search-album/wraper-search-album.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchBoxComponent,
    SearchResultsComponent,
    AlbumDetailsComponent,
    WraperSearchAlbumComponent
  ],
  exports:[
    WraperSearchAlbumComponent
  ]
})
export class SearchMusicModule { }
