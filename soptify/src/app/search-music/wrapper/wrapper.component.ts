import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../interfaces";

@Component({
  selector: 'lekarz-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent implements OnInit {

  constructor(private spotify: SpotifyService) {

  }

  albums: Album[];

  searchMusic(searchUrl){
    this.spotify.getAlbums(searchUrl).subscribe(albums => {
      this.albums = albums as Album[];
      console.log('Albums: ', albums);
    });
  }

  ngOnInit() {
  }

}
