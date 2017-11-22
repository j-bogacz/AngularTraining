import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { SpotifyService} from "../spotify.service"
import { Album } from "../interfaces";
import { SpotifyMockService } from '../spotify-mock.service'

@Component({
  selector: 'bart-wrapper',
  templateUrl: './wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent implements OnInit {

  query:string;

  albums: Album[];

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
    this.spotifyService.getalbum(query)
      .subscribe(albums => {
        this.albums = albums as Album[];
      });
    // console.log(query);
    // this.albums = this.spotifyMockService.getAlbums()['albums']['items'];
  }

}
