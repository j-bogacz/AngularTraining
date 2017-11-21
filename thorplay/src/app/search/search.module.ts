import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {SearchViewComponent} from "./search-view/search-view.component";
import {HttpClientModule} from "@angular/common/http";
import {SpotifyService} from "./spotify.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    SearchPanelComponent
  ],
  declarations: [
    SearchViewComponent,
    SearchResultComponent,
    SearchPanelComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class SearchModule {
}
