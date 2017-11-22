import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {SearchViewComponent} from "./search-view/search-view.component";
import {HttpClientModule} from "@angular/common/http";
import {SpotifyService} from "./spotify.service";
import {ReactiveFormsModule} from "@angular/forms";
import {PreviewComponent} from "./preview/preview.component";
import {SpotifyMockService} from "./spotify-mock.service";
import {FilterAlbumsPipe} from './filter-albums.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SearchPanelComponent
  ],
  declarations: [
    SearchViewComponent,
    SearchResultComponent,
    SearchPanelComponent,
    PreviewComponent,
    FilterAlbumsPipe
  ],
  providers: [
    SpotifyService,
    SpotifyMockService
  ]
})
export class SearchModule {
}
