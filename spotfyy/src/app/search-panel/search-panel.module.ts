import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchPanelWrapperComponent } from './search-panel-wrapper/search-panel-wrapper.component';

@NgModule({
  imports: [
    CommonModule

  ],
  declarations: [
    SearchBoxComponent,
    SearchResultsComponent,
    SearchPanelWrapperComponent
  ],
  exports: [
    SearchPanelWrapperComponent
  ]
})
export class SearchPanelModule { }
