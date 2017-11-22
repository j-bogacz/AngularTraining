import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
      'keyword': new FormControl('pizza')
    });
    this.searchForm.valueChanges
      .pipe(
        filter(query => query.keyword.length >= 3),
        debounceTime(500)
      )
      .subscribe((dataIn) => {
        this.keywordChange.emit(dataIn.keyword);
    });
  }

  doSearch(keyword) {
    console.log(this.searchForm);
    this.keywordChange.emit(keyword);

  }
}
