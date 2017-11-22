import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'mk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;
  @Output() searchQueryChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'query': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    this.searchForm.valueChanges.pipe(
      filter(() => this.searchForm.valid),
      debounceTime(500)
    ).subscribe((newValue) => {
      console.log(newValue);
      this.searchQueryChanged.emit(newValue.query);
    });
  }

  search() {
    if (this.searchForm.valid) {
      console.log(this.searchForm);
      this.searchQueryChanged.emit(this.searchForm.value.query);
    }
  }

}
