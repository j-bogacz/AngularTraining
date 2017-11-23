import {Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';

import {SpotifyAccessorService} from './spotify-accessor.service';
import {SpotifyAccessorMockService} from './spotify-accessor-mock.service';
import {Album} from "./interfaces";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'component-album-finder',
  templateUrl: './album-finder.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumFinderComponent implements OnInit {

  // foundAlbums: Album[];
  $foundAlbums: Observable<Album[]>;

  constructor(private spotifyAccessorService: SpotifyAccessorService, private spotifyAccessorMockService: SpotifyAccessorMockService) {
  }

  ngOnInit() {
  }

  FindAlbum(albumName: string) {
    this.$foundAlbums = this.spotifyAccessorService.GetAlbums(albumName);
    // this.spotifyAccessorService.GetAlbums(albumName).subscribe(foundAlbums => {
    //   this.foundAlbums = foundAlbums;
    // });
    // this.foundAlbums = this.spotifyAccessorMockService.GetAlbums()['albums']['items']
  }

}
