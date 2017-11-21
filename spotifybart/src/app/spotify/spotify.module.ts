import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SpotifyService } from "./spotify.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    SearchComponent,
    ArtistListComponent,
    WrapperComponent
  ],
  providers: [
    SpotifyService
  ],
  exports: [
    WrapperComponent
  ]
})
export class SpotifyModule { }
