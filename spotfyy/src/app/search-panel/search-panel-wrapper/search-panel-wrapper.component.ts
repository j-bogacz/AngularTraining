import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../interfaces';
import {SpotifyMockService} from '../spotify-mock.service';

@Component({
  selector: 'lekarz-search-panel-wrapper',
  templateUrl: './search-panel-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchPanelWrapperComponent implements OnInit {
  @Output() albums: Album[];
  constructor(private spotifyService: SpotifyService,
              private spotifyMockService: SpotifyMockService) {

  }

  performSearch(keyword) {
    console.log('performSearch ' + keyword);
    this.spotifyService.getAlbums(keyword)
      .subscribe(albums => {
        this.albums = albums;
        console.log('albums', albums);
      });

    // this.albums = this.spotifyMockService.getAlbums()['albums']['items'];
  }

  ngOnInit() {
  }

}
