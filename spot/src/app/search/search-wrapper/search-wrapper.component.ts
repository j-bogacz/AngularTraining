import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../interfaces';

@Component({
  selector: 'mk-search-wrapper',
  templateUrl: './search-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchWrapperComponent implements OnInit {
  albums: Album[];
  constructor(private spotify: SpotifyService) {
    this.spotify.getAlbums('Otsochodzi').subscribe(albums => {
      this.albums = albums as Album[];
      console.log('albums', this.albums);
    });
  }

  ngOnInit() {
  }

}
