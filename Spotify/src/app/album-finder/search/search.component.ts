import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'component-search',
  templateUrl: './search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  albumName: string;

  constructor() {
  }

  ngOnInit() {
  }

  Search() {
    console.log('Looking for album: ', this.albumName);
  }

}
