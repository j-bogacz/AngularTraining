import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'abc-album-search',
  templateUrl: './album-search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumSearchComponent implements OnInit {


  @Output() clickBtn = new EventEmitter<string>();

  searchForm: FormGroup;

  searchString: string = '';

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchString' : new FormControl('test', [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    this.searchForm.valueChanges.pipe(
      filter( () => this.searchForm.valid),
        //query => query.searchString.length >= 3),
      debounceTime(500)
    ).subscribe(
      (dataIn) => {
        this.clickBtn.emit(dataIn.searchString);
      });
  }

  doSearch() {
    if(this.searchForm.valid) {
      this.clickBtn.emit(this.searchForm.value.searchString);
    }
    console.log(this.searchForm);
    // this.clickBtn.emit(searchString);
  }

}
