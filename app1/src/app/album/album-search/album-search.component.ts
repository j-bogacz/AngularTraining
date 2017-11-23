import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {
  FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';
import {Observable} from "rxjs/Observable";

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

  constructor() {

  }

  ngOnInit() {

    const censor = (word: string): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
      if(control.value && control.value.indexOf(word) !== -1){
        return {
          'badword' : word
        };
      }else{
        return null;
      }
    };
    type OptionalErrors = ValidationErrors | null;

    const asyncCensor = (word: string): AsyncValidatorFn => (control: AbstractControl): Observable<OptionalErrors> => {
      return Observable.create( observer => {
        setTimeout(() => {
          const isError = (control.value && control.value.indexOf(word) !== -1) ? {'badwordasync': word} : null;
          observer.next(isError);
          observer.complete();
        }, 200);
      });

    }

    this.searchForm = new FormGroup({
      'searchString' : new FormControl('test', [
        Validators.required,
        Validators.minLength(3),
        censor('batman')
      ],
        [
          //asyncCensor('babcia')
        ])
    });

    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      filter( () => this.searchForm.valid)
        //query => query.searchString.length >= 3),

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
