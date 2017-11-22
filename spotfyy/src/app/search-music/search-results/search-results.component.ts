import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../interfaces";

@Component({
  selector: 'lekarz-search-results',
  templateUrl: './search-results.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchResultsComponent implements OnInit {
  @Input() albums: Album[];

  constructor() {

  }

  ngOnInit() {
  }

}
