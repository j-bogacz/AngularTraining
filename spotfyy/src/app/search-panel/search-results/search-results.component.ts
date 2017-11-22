import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Album} from '../interfaces';

@Component({
  selector: 'lekarz-search-results',
  templateUrl: './search-results.component.html',
  styles: [`
    .card{ min-width: 25%; }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchResultsComponent implements OnInit {

  // @Output() selectedChanged = new EventEmitter();
  @Input() albums: Album[];

  constructor() { }

  ngOnInit() {
  }

  // onSelected(album){
  //  this.selectedChanged.emit(album);

    // this.selected = album;

  // }

}
