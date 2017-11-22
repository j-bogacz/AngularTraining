import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchPanelWrapperComponent } from './search-panel-wrapper/search-panel-wrapper.component';
import {SpotifyService} from './spotify.service';
import { ReactiveFormsModule} from '@angular/forms';
import {SpotifyMockService} from './spotify-mock.service';
import {RouterModule } from "@angular/router";


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
    SearchPanelWrapperComponent
  ],
  providers: [
    SpotifyService,
    SpotifyMockService
  ],
  exports: [
    SearchPanelWrapperComponent
  ]
})
export class SearchPanelModule { }
