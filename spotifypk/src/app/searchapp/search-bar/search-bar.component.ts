import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { filter, debounceTime } from 'rxjs/operators';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'lekarz-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent implements OnInit {

  query: string;
  searchForm: FormGroup;
  constructor() {

  }

  ngOnInit() {
    const censor = (word:string):ValidatorFn => (control:AbstractControl):ValidationErrors|null => {
      if(control.value != null && control.value.indexOf(word) != -1) {
        return {
          'badword':word
        }
      }else{
        return null;
      }
    };

    type OptionalErrors = ValidationErrors|null;

    const asyncCensor = (word):AsyncValidatorFn => (control:AbstractControl):Observable<OptionalErrors> => {

      return Observable.create( observer => {
        setTimeout(()=>{
          let isError = (control.value.indexOf(word) != -1)? {'badword':word} : null;

          observer.next(isError)
          observer.complete()
        },2000);
      })
      };
    this.searchForm = new FormGroup({
      'query': new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        censor('batman')
      ], [
        asyncCensor('babcia')
      ])
    });

    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      filter(() => this.searchForm.valid),
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
