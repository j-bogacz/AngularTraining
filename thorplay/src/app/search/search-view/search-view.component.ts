import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kuku-search-view',
  templateUrl: './search-view.component.html',
  styles: [`
    .card {
      margin-bottom: 15px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchViewComponent implements OnInit {
  searchText: string = '';
  @Output() onSearchTextChange = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  searchSpotify() {
    this.onSearchTextChange.emit(this.searchText);
  }
}
