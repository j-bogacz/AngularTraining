import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumWrapperComponent } from './album-wrapper/album-wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlbumListComponent,
    AlbumSearchComponent,
    AlbumWrapperComponent
  ],
  exports: [
    AlbumWrapperComponent
  ]
})
export class AlbumModule { }
