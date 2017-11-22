// import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
//
// @Component({
//   selector: 'component-search-box',
//   templateUrl: './search-box.component.html',
//   styles: [],
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class SearchBoxComponent implements OnInit {
//
//   @Input()
//   query: string;
//
//   @Input()
//   queryPlaceholder: string;
//
//   @Output()
//   queryChanged = new EventEmitter();
//
//   constructor() {
//   }
//
//   ngOnInit() {
//   }
//
//   EmitQuery() {
//     this.queryChanged.emit(this.query);
//   }
// }

import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {debounceTime, filter} from "rxjs/operators";

@Component({
  selector: 'component-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  @Input()
  queryPlaceholder: string;

  @Output()
  queryChanged = new EventEmitter();

  queryForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.queryForm = new FormGroup({
      'query': new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    this.queryForm.valueChanges.pipe(
      filter(this.FilterValues),
      debounceTime(500))
      .subscribe(newValue => this.OnValueChanges(newValue, this.queryChanged));
  }

  FilterValues(value) {
    console.log('Incoming query: ', value.query, value.query.length < 4 ? ' (too short)' : '');
    return value.query.length > 3;
  }

  OnValueChanges(newValue, eventEmmiter) {
    console.log('Value changes, new value: ', newValue);
    var query = newValue.query;
    console.log('Emit query: ', query);
    eventEmmiter.emit(query);
  }
}
