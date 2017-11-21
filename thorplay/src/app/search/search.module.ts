import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {SearchViewComponent} from "./search-view/search-view.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchPanelComponent
  ],
  declarations: [
    SearchViewComponent,
    SearchResultComponent,
    SearchPanelComponent
  ]
})
export class SearchModule {
}
