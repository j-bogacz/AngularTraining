import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SpotifyService } from "./spotify.service";
import { FormsModule } from '@angular/forms';
import {SpotifyMockService} from "./spotify-mock.service";
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchComponent,
    ArtistListComponent,
    WrapperComponent
  ],
  providers: [
    SpotifyService,
    SpotifyMockService
  ],
  exports: [
    WrapperComponent
  ]
})
export class SpotifyModule { }
