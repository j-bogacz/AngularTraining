import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../interfaces';
import {SpotifyMockService} from '../spotify-mock.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'lekarz-search-panel-wrapper',
  templateUrl: './search-panel-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchPanelWrapperComponent implements OnInit {
  @Output() albums: Album[];
  $albums: Observable<Album[]>;
  constructor(private spotifyService: SpotifyService,
              private spotifyMockService: SpotifyMockService) {

  }

  performSearch(keyword: string) {
    this.$albums = this.spotifyService.getAlbums(keyword);
    /*console.log('performSearch ' + keyword);
    this.spotifyService.getAlbums(keyword)
      .subscribe(albums => {
        this.albums = albums;
        console.log('albums', albums);
      });*/

    // this.albums = this.spotifyMockService.getAlbums()['albums']['items'];
  }

  ngOnInit() {
  }

}
