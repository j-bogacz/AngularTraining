import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { WrapperComponent } from './wrapper/wrapper.component';
import {SearchComponent} from './search/search.component';
import {AlbumComponent} from './album/album.component';
import {SpotifyService} from './spotify.service';
import {ReactiveFormsModule} from "@angular/forms";
import {SpotiMockService} from "./spoti-mock.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    WrapperComponent,
    SearchComponent,
    AlbumComponent
  ],
  providers: [
    SpotifyService,
    SpotiMockService
  ],
  exports: [WrapperComponent]
})
export class SearchMusicModule { }
