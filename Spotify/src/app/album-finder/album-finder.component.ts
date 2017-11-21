import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {SpotifyAccessorService} from './spotify-accessor.service';
import {Album} from "./interfaces";

@Component({
  selector: 'component-album-finder',
  templateUrl: './album-finder.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumFinderComponent implements OnInit {

  albumName: string;
  albums: Album[];

  constructor(private spotifyAccessorService: SpotifyAccessorService) {
  }

  ngOnInit() {
    this.spotifyAccessorService.GetAlbums(this.albumName).subscribe(foundAlbums => {
      this.albums = foundAlbums;
      console.log('Found albums: ', this.albums);
    });
  }

  LookForAlbum(albumName: string) {
    this.spotifyAccessorService.GetAlbums(albumName).subscribe(foundAlbums => {
      this.albums = foundAlbums;
      console.log('Found albums: ', this.albums);
    });
  }

}
