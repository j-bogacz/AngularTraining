import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../interfaces";

@Component({
  selector: 'lekarz-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent implements OnInit {


  albums: Album[];

  constructor(private spotify: SpotifyService) {
    this.spotify.getAlbums().subscribe(albums => {
      this.albums = albums as Album[];
      console.log('Albums: ', albums);
    });

  }

  ngOnInit() {
  }

}
