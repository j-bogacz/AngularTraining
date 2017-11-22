import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SearchBoxComponent} from './search-box/search-box.component';
import {ResultsComponent} from './results/results.component';
import {AlbumFinderComponent} from './album-finder.component';
import {DetailsComponent} from './details/details.component';
import {SpotifyAccessorService} from "./spotify-accessor.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SpotifyAccessorAuthenticationService} from "./spotify-accessor-authentication.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    SearchBoxComponent,
    ResultsComponent,
    AlbumFinderComponent,
    DetailsComponent
  ],
  providers: [SpotifyAccessorService, SpotifyAccessorAuthenticationService],
  exports: [AlbumFinderComponent]
})
export class AlbumFinderModule {
}
