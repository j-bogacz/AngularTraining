import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { WrapperComponent } from './wrapper/wrapper.component';
import {SearchComponent} from './search/search.component';
import {AlbumComponent} from './album/album.component';
import {SpotifyService} from './spotify.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    WrapperComponent,
    SearchComponent,
    AlbumComponent
  ],
  providers: [
    SpotifyService
  ],
  exports: [WrapperComponent]
})
export class SearchMusicModule { }
