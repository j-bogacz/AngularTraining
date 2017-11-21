import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../interfaces";

@Component({
  selector: 'kuku-search-result',
  templateUrl: './search-result.component.html',
  styles: [`
    .card {
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchResultComponent implements OnInit {
  @Input() albums: Album[];

  constructor() {
  }

  ngOnInit() {
  }

}
