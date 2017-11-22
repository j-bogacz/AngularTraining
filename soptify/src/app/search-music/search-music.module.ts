import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { WrapperComponent } from './wrapper/wrapper.component';
import {SearchComponent} from './search/search.component';
import {AlbumComponent} from './album/album.component';
import {SpotifyService} from './spotify.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
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
