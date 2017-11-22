import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../interfaces";
import {SpotiMockService} from "../spoti-mock.service";

@Component({
  selector: 'lekarz-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent implements OnInit {

  albums: Album[];

  ngOnInit() {
  }

  constructor(private spotify: SpotifyService, private spotiMock: SpotiMockService) {
  }

  searchMusic(searchUrl) {
    //this.albums = this.spotiMock.getAlbums()['albums']['items'];
   //
    //console.log('WrapperComponent.searchMusic() searchUrl',searchUrl);
    this.spotify.getAlbums(searchUrl).subscribe(albums => {
      this.albums = albums as Album[];
      console.log('Albums: ', albums);
    });
  }
}
