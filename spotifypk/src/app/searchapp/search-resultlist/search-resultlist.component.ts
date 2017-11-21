import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Album } from '../interfaces';

@Component({
  selector: 'lekarz-search-resultlist',
  templateUrl: './search-resultlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchResultlistComponent implements OnInit {

  @Input() albums: Album[];
  constructor() { }

  ngOnInit() {
  }

}
