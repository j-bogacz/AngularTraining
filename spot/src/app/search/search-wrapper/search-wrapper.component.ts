import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
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

  @Input() query: string;

  constructor(private spotify: SpotifyService) {

  }

  ngOnInit() {
  }

  search(query: string) {
    console.log(query);
    this.spotify.getAlbums(query).subscribe(albums => this.albums = albums);
  }


}
