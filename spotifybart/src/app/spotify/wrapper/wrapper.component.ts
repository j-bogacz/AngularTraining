import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { SpotifyService} from "../spotify.service"
import { Album } from "../interfaces";

@Component({
  selector: 'bart-wrapper',
  templateUrl: './wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent implements OnInit {

  query:string;

  albums: Album[];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getalbum(this.query)
      .subscribe( albums => {
        this.albums = albums as Album[];
        console.log('albums', albums)
      });
  }

  ngOnInit() {
  }

  search(query: string = "aaaa") {
    this.spotifyService.getalbum(query)
      .subscribe((albums => {
        this.albums = albums as Album[];
      });
  }

}
