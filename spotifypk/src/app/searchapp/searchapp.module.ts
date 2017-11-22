import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultlistComponent } from './search-resultlist/search-resultlist.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchWrapperComponent } from './search-wrapper/search-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
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
    SearchService
  ]
})
export class SearchappModule { }
