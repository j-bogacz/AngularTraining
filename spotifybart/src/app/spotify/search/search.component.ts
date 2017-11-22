import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms"
import { FormGroup, Validators } from "@angular/forms"
import { filter, debounceTime} from "rxjs/operators";

@Component({
  selector: 'bart-search',
  templateUrl: './search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  searchText:string = "";
  constructor() { }

  searchForm: FormGroup;
  @Output() searchClicked = new EventEmitter<string>();

  ngOnInit() {
    this.searchForm = new FormGroup({
      'keyword': new FormControl('placki', [
        Validators.required,
        Validators.minLength( 3)
      ])
    });
    this.searchForm.valueChanges
      .pipe(filter((query) => query.keyword.length >= 3),
        debounceTime(500))
      .subscribe((dataIn) => {
        this.searchClicked.emit(dataIn.keyword);
      console.log(dataIn);
    })
  }

  search() {
    console.log(this.searchForm);
    this.searchClicked.emit(this.searchText);
  }
}
