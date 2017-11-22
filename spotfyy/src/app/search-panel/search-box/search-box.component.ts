import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Album} from '../interfaces';

@Component({
  selector: 'lekarz-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  keyword: string;
  @Output() searchClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearchClick(){
    console.log('onSearchClick ' + this.keyword);
    this.searchClicked.emit(this.keyword);

  }
}
