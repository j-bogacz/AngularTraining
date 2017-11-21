import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Album } from '../interfaces';

@Component({
  selector: 'lekarz-search-result',
  templateUrl: './search-result.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchResultComponent implements OnInit {

  @Input() album: Album;
  constructor() { }

  ngOnInit() {
  }

}
