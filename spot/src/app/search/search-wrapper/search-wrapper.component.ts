import {Component, EventEmitter, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../interfaces';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'mk-search-wrapper',
  templateUrl: './search-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchWrapperComponent implements OnInit {
  albums: Album[];
  $albums: Observable<Album[]>;
  // albums: any;

  @Input() query: string;

  constructor(private spotify: SpotifyService) {

  }

  ngOnInit() {
  }

  search(query: string = 'ACDC') {
    console.log('Search for ', query);
    // this.spotify.getAlbums(query).subscribe(albums => this.albums = albums);
    this.$albums = this.spotify.getAlbums(query);
  }


}
