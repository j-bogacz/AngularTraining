import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {
  AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'mk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;
  @Output() searchQueryChanged = new EventEmitter();

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

    type OptionalErrors = ValidationErrors | null;

    const asyncCensor = (word): AsyncValidatorFn => (control: AbstractControl): Observable<OptionalErrors> => {

      return Observable.create(observer => {
        setTimeout(() => {
          let isError = (control.value.indexOf(word) !== -1) ? {'badwordasync': word} : null;

          observer.next(isError);
          observer.complete();
        }, 2000);
      });
    }

    this.searchForm = new FormGroup({
      'query': new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        censor('barman')
      ])
    });
    this.searchForm.valueChanges.pipe(
      filter(() => this.searchForm.valid),
      debounceTime(1000)
    ).subscribe((newValue) => {
      console.log(newValue);
      this.searchQueryChanged.emit(newValue.query);
    });
  }

  search() {
    if (this.searchForm.valid) {
      console.log(this.searchForm);
      this.searchQueryChanged.emit(this.searchForm.value.query);
    }
  }

}
