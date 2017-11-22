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
  query: string;
  constructor(private spotifyService: SpotifyService) {
    this.search();
  }

  search(query: string = 'acdc'){
    this.spotifyService.getAlbums(query)
      .subscribe(albums => {
        this.albums = albums as Album[];
      });
  }

  ngOnInit() {

  }

}
