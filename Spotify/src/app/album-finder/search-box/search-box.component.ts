import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'component-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  @Input()
  query: string;

  @Input()
  queryPlaceholder: string;

  @Output()
  queryChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  EmitQuery() {
    this.queryChanged.emit(this.query);
  }

}
