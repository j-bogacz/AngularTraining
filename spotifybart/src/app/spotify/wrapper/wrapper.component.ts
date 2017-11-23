import {Component, OnInit, ViewEncapsulation, Input, EventEmitter} from '@angular/core';
import { SpotifyService} from "../spotify.service"
import { Album } from "../interfaces";
import { SpotifyMockService } from '../spotify-mock.service'
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'bart-wrapper',
  templateUrl: './wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent implements OnInit {

  query:string;

  albums: Album[];
  $albums: Observable<Album[]>;

  constructor(private spotifyService: SpotifyService, private spotifyMockService: SpotifyMockService) {
    // this.spotifyService.getalbum(this.query)
    //   .subscribe( albums => {
    //     this.albums = albums as Album[];
    //     console.log('albums', albums)
    //   });
    this.albums = this.spotifyMockService.getAlbums()['albums']['items'];

  }
  ngOnInit() {
  }

  search(query: string = "aaaa") {
    this.$albums = this.spotifyService.getalbum(query);
    // this.spotifyService.getalbum(query)query
    //   .subscribe(albums => {
    //     this.albums = albums as Album[];
    //   });
    // console.log(query);
    // this.albums = this.spotifyMockService.getAlbums()['albums']['items'];
  }

}
