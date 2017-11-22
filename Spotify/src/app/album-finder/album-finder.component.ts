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

  foundAlbums: Album[];

  constructor(private spotifyAccessorService: SpotifyAccessorService) {
  }

  ngOnInit() {
  }

  FindAlbum(albumName: string) {
    this.spotifyAccessorService.GetAlbums(albumName).subscribe(foundAlbums => {
      this.foundAlbums = foundAlbums;
    });
  }

}
