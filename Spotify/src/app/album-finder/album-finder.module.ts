import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SearchBoxComponent} from './search-box/search-box.component';
import {ResultsComponent} from './results/results.component';
import {AlbumFinderComponent} from './album-finder.component';
import {DetailsComponent} from './details/details.component';
import {SpotifyAccessorService} from "./spotify-accessor.service";
import {SpotifyAccessorMockService} from "./spotify-accessor-mock.service";
import {HttpClientModule} from "@angular/common/http";
import {SpotifyAccessorAuthenticationService} from "./spotify-accessor-authentication.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    SearchBoxComponent,
    ResultsComponent,
    AlbumFinderComponent,
    DetailsComponent
  ],
  providers: [SpotifyAccessorService, SpotifyAccessorMockService, SpotifyAccessorAuthenticationService],
  exports: [AlbumFinderComponent]
})
export class AlbumFinderModule {
}
