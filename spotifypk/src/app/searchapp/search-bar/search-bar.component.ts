import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'lekarz-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent implements OnInit {

  query: string;
  searchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
        'query': new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ])
    });
    this.searchForm.valueChanges.pipe(
      filter(query => query['query'].length >= 3),
      debounceTime(1000)
    ).subscribe((dataIn) => {
        this.doSearch(dataIn['query']);
    });
  }

  @Output() textChanged = new EventEmitter<string>();
  onTextChanged(text){
    this.textChanged.emit(text);
  }

  doSearch(value) {
    console.log(this.searchForm);
    this.onTextChanged(value);
    console.log('Current value of query is: ' + value);
  }
}
