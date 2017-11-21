import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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

  constructor() {

  }

  ngOnInit() {
  }

}
