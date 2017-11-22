import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { WraperSearchAlbumComponent } from './wraper-search-album/wraper-search-album.component';
import {SpotifyService} from "./spotify.service";
import {SpoftifyMockService} from './spoftify-mock.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    SearchBoxComponent,
    SearchResultsComponent,
    AlbumDetailsComponent,
    WraperSearchAlbumComponent
  ],
  providers: [
    SpotifyService,
    SpoftifyMockService
  ],
  exports: [
    WraperSearchAlbumComponent
  ]
})
export class SearchMusicModule { }
