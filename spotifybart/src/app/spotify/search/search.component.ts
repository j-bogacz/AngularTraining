import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bart-search',
  templateUrl: './search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  searchText:string = "";
  constructor() { }

  @Output() searchClicked = new EventEmitter<string>();

  ngOnInit() {
  }

  search() {
    this.searchClicked.emit(this.searchText);
  }
}
