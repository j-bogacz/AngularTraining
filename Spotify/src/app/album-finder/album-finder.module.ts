import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchComponent} from './search/search.component';
import {ResultsComponent} from './results/results.component';
import {AlbumFinderComponent} from './album-finder.component';
import {DetailsComponent} from './details/details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    AlbumFinderComponent,
    DetailsComponent
  ],
  exports: [AlbumFinderComponent]
})
export class AlbumFinderModule {
}
