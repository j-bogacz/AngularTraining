import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from "../interfaces";

@Component({
  selector: 'mk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent implements OnInit {

  query: string;
  @Output() searchQueryChanged = new EventEmitter();

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() {
  }

  search(query: string) {
    console.log('Search', query);
    this.searchQueryChanged.emit(this.query);
  }

}
