import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, filter} from "rxjs/operators";

@Component({
  selector: 'kuku-search-view',
  templateUrl: './search-view.component.html',
  styles: [`
    .card {
      margin-bottom: 15px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchViewComponent implements OnInit {
  @Output() onSearchTextChange = new EventEmitter<string>();
  searchForm: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'query': new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    this.searchForm.valueChanges.pipe(
      filter(t => {
        return this.searchForm.valid;
      }),
      debounceTime(600)
    ).subscribe((dataIn) => {
      console.log(dataIn);
      this.onSearchTextChange.emit(dataIn.query);
    });
  }

  searchSpotify() {
    if (this.searchForm.valid) {
      this.onSearchTextChange.emit(this.searchForm.value.query);
    }
  }
}
