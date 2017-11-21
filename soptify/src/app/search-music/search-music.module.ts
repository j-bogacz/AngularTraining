import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperComponent } from './wrapper/wrapper.component';
import {SearchComponent} from "./search/search.component";
import {AlbumComponent} from "./album/album.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WrapperComponent,
    SearchComponent,
    AlbumComponent
  ],
  exports: [WrapperComponent]
})
export class SearchMusicModule { }
