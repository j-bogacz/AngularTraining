import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lekarz-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent implements OnInit {

  query: string;
  constructor() { }

  ngOnInit() {
  }

  @Output() textChanged = new EventEmitter<string>();
  onTextChanged(text){
    this.textChanged.emit(text);
  }

  doSearch() {
    this.onTextChanged(this.query);
    console.log('Current value of query is: ' + this.query);
  }
}
