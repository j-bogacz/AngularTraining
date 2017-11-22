import {Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'lekarz-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  @Output() keyWordChange = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'keyWord': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    this.searchForm.valueChanges.pipe(
      filter(() => this.searchForm.valid),
      debounceTime(500)
    ).subscribe((dataIn) => {
      this.keyWordChange.emit(dataIn.keyWord);
    });

  }
  onGetDataFromApi(){
    let fromApi = {
      query: 'quen'
    }
    this.searchForm.patchValue({
      'keyWord': fromApi.query
    });
    this.registerForm.setValue({
      'addres': {'home':"Płock"}
    });
  }
  doSearch() {
    if (this.searchForm.valid) {
      this.keyWordChange.emit(this.searchForm.value.keyWord);
    }
  }

}
