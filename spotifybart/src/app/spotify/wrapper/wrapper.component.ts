import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SpotifyService} from "../spotify.service"
import { Album } from "../interfaces";

@Component({
  selector: 'bart-wrapper',
  templateUrl: './wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent implements OnInit {

  albums: Album[];
  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getalbum()
      .subscribe( albums => {
        this.albums = albums as Album[];
        console.log('albums', albums)
      });
  }

  ngOnInit() {
  }


}
