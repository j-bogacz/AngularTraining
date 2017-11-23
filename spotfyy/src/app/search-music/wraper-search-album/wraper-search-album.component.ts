import {Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../interfaces';
import {SpoftifyMockService} from '../spoftify-mock.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'lekarz-wraper-search-album',
  templateUrl: './wraper-search-album.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WraperSearchAlbumComponent implements OnInit {
  albums: Album[];
  //$albums = new Observable<Album[]>();
  $albums: Observable<Album[]>;
  query: string;
  constructor(
    private spotifyService: SpotifyService,
    private spoftifyMockService: SpoftifyMockService) {
    this.search();
  }

  search(query: string = 'acdc') {
    this.$albums = this.spotifyService.getAlbums(query);
    // this.spotifyService.getAlbums(query)
    //   .subscribe(albums => {
    //     this.albums = albums as Album[];
    //   });
    // console.log(query);
    // this.albums = this.spoftifyMockService.getAlbums()['albums']['items'];
  }

  ngOnInit() {

  }

}
