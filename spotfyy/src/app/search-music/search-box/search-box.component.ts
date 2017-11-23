import {Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'lekarz-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  @Output() keyWordChange = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    const censor = (word: string): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.indexOf(word) !== -1) {
        return {
          'badword': word
        };
      } else {
        return null;
      }
    };
    type OptionalErrors = ValidationErrors|null;

    const asyncCensor = (word: string): AsyncValidatorFn => (control: AbstractControl): Observable<OptionalErrors> => {
      return Observable.create( observer => {
        setTimeout(() => {
          const isError = (control.value && control.value.indexOf(word) !== -1) ? {'badwordasync': word} : null;
          observer.next(isError);
          observer.complete();
        },200);
      });
    }
    this.searchForm = new FormGroup({
      'keyWord': new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        censor('batman')
      ], [
        asyncCensor('babcia')
      ])
    });
    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      filter(() => this.searchForm.valid)
    ).subscribe((dataIn) => {
      this.keyWordChange.emit(dataIn.keyWord);
    });

  }

  doSearch() {
    console.log(this.searchForm);
    if (this.searchForm.valid) {
      this.keyWordChange.emit(this.searchForm.value.keyWord);
    }
  }

}
