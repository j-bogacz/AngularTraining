import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../interfaces';

@Component({
  selector: 'lekarz-search-panel-wrapper',
  templateUrl: './search-panel-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchPanelWrapperComponent implements OnInit {
  @Output() albums: Album[];
  constructor(private spotifyService: SpotifyService) {
    console.log('test');
    this.spotifyService.getAlbums()
      .subscribe(albums=> {
        this.albums = albums;
        console.log('albums', albums);
      });
  }

  ngOnInit() {
  }

}
