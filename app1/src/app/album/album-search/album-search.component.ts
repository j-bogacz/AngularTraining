import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'abc-album-search',
  templateUrl: './album-search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumSearchComponent implements OnInit {

  searchString: string = 'ala';
  constructor() { }

  ngOnInit() {
  }

}
