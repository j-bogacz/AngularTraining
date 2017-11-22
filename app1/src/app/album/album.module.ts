import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumWrapperComponent } from './album-wrapper/album-wrapper.component';
import { SpotifyService } from './spotify.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AlbumListComponent,
    AlbumSearchComponent,
    AlbumWrapperComponent
  ],
  exports: [
    AlbumWrapperComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class AlbumModule { }
