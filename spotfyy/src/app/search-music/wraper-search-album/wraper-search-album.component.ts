import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../interfaces';
import {SpoftifyMockService} from '../spoftify-mock.service';

@Component({
  selector: 'lekarz-wraper-search-album',
  templateUrl: './wraper-search-album.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WraperSearchAlbumComponent implements OnInit {
  albums: Album[];
  query: string;
  constructor(
    private spotifyService: SpotifyService,
    private spoftifyMockService: SpoftifyMockService) {
    this.search();
  }

  search(query: string = 'acdc'){
    this.spotifyService.getAlbums(query)
      .subscribe(albums => {
        this.albums = albums as Album[];
      });
    // console.log(query);
    // this.albums = this.spoftifyMockService.getAlbums()['albums']['items'];
  }

  ngOnInit() {

  }

}
