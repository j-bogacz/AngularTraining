import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {AsyncValidatorFn, FormControl, ReactiveFormsModule} from "@angular/forms"
import { FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms"
import { filter, debounceTime} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'bart-search',
  templateUrl: './search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  searchText:string = "";
  constructor() {

  }

  searchForm: FormGroup;
  @Output() searchClicked = new EventEmitter<string>();

  ngOnInit() {

    const censor = (word:string): ValidatorFn => (control: AbstractControl): ValidationErrors|null => {
      if(control.value && control.value.indexOf(word) !== -1){
        return {
          'badword':word
        }
      }else{
        return null
      }
    };
    type OptionalErrors = ValidationErrors|null;

    const asyncCensor = (word: string): AsyncValidatorFn => (control: AbstractControl): Observable<OptionalErrors> => {
      return Observable.create( observer => {
        setTimeout(() => {
          const isError = (control.value && control.value.indexOf(word) !== -1) ? {'badwordasync': word} : null;
          observer.next(isError);
          observer.complete();
        },2000);
      });
    }

    this.searchForm = new FormGroup({
      'keyWord': new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        censor('batman')
      ],

        [
        asyncCensor('babcia')
      ])
    });

    this.searchForm = new FormGroup({
      'keyword': new FormControl('', [
        Validators.required,
        Validators.minLength( 3),
        censor("psiajucha")
      ],
        [asyncCensor('babcia')])
    });
    let fromApi = {
      query: 'queen'
    }

    this.searchForm.patchValue({
      'keyword': fromApi.query
    })
    this.searchForm.valueChanges
      .pipe(filter(() => this.searchForm.valid),
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

  doSearch() {
    if(this.searchForm.valid) {
      this.searchClicked.emit(this.searchForm.value.keyword)
    }

    console.log(this.searchForm);
  }
}
