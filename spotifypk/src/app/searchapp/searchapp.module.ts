import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultlistComponent } from './search-resultlist/search-resultlist.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchWrapperComponent } from './search-wrapper/search-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SpotifyMockService } from './spotify-mock.service';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    SearchBarComponent,
    SearchResultlistComponent,
    SearchResultComponent,
    SearchWrapperComponent
  ],
  exports: [
    SearchWrapperComponent
  ],
  providers: [
    SearchService,
    SpotifyMockService
  ]
})
export class SearchappModule { }
