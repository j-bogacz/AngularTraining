import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { WraperSearchAlbumComponent } from './wraper-search-album/wraper-search-album.component';
import {SpotifyService} from "./spotify.service";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SearchBoxComponent,
    SearchResultsComponent,
    AlbumDetailsComponent,
    WraperSearchAlbumComponent
  ],
  providers: [
    SpotifyService
  ],
  exports: [
    WraperSearchAlbumComponent
  ]
})
export class SearchMusicModule { }
