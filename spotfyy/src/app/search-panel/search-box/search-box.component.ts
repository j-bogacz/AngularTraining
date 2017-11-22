import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'lekarz-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  // keyword: string;
  @Output() keywordChange = new EventEmitter();
  searchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'keyword': new FormControl('pizza', [
          Validators.required,
          Validators.minLength(3)
        ])
    });
    this.searchForm.valueChanges
      .pipe(
        filter(() => this.searchForm.valid),
        debounceTime(800)
      )
      .subscribe((dataIn) => {
        this.keywordChange.emit(dataIn.keyword);
    });
  }

  doSearch() {
    console.log(this.searchForm);
    if(this.searchForm.valid) {
      this.keywordChange.emit(this.searchForm.value.keyword);
    }


  }
}
