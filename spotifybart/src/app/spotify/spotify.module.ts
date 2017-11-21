import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchComponent,
    ArtistListComponent,
    WrapperComponent
  ],
  exports: [
    WrapperComponent
  ]
})
export class SpotifyModule { }
