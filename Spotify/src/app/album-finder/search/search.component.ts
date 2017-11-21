import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'component-search',
  templateUrl: './search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  albumName: string = 'acdc';

  @Output()
  albumNameChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  Search() {
    console.log('Looking for album: ', this.albumName);
    this.albumNameChanged.emit(this.albumName);
  }

}
