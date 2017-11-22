import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'abc-album-search',
  templateUrl: './album-search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumSearchComponent implements OnInit {


  @Output() clickBtn = new EventEmitter<string>();

  searchString: string = '';

  constructor() { }

  ngOnInit() {
  }

  onClickEvent($event) {
    this.clickBtn.emit(this.searchString);
  }

}
