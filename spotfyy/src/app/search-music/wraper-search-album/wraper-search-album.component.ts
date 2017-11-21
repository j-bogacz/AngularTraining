import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../interfaces";

@Component({
  selector: 'lekarz-wraper-search-album',
  templateUrl: './wraper-search-album.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WraperSearchAlbumComponent implements OnInit {
  albums: Album[];
  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getAlbums()
      .subscribe(albums => {
        this.albums = albums as Album[];
      });
  }

  ngOnInit() {
  }

}
