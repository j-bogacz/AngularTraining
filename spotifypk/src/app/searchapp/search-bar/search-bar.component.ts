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
      filter(() => this.searchForm.valid),
      debounceTime(1000)
    ).subscribe((dataIn) => {
      this.textChanged.emit(dataIn.query);
    });
  }

  @Output() textChanged = new EventEmitter<string>();
  onTextChanged(text){
    this.textChanged.emit(text);
  }

  doSearch(value) {
    if(this.searchForm.valid){
      this.textChanged.emit(this.searchForm.value.query);
    }
  }
}
