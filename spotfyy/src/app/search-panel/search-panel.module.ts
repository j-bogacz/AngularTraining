import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchPanelWrapperComponent } from './search-panel-wrapper/search-panel-wrapper.component';
import {SpotifyService} from './spotify.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    SearchBoxComponent,
    SearchResultsComponent,
    SearchPanelWrapperComponent
  ],
  providers: [
    SpotifyService
  ],
  exports: [
    SearchPanelWrapperComponent
  ]
})
export class SearchPanelModule { }
