import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    console.log('Search');

  }

}
