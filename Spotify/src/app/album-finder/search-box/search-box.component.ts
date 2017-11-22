// import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
//
// @Component({
//   selector: 'component-search-box',
//   templateUrl: './search-box.component.html',
//   styles: [],
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class SearchBoxComponent implements OnInit {
//
//   @Input()
//   query: string;
//
//   @Input()
//   queryPlaceholder: string;
//
//   @Output()
//   queryChanged = new EventEmitter();
//
//   constructor() {
//   }
//
//   ngOnInit() {
//   }
//
//   EmitQuery() {
//     this.queryChanged.emit(this.query);
//   }
// }

import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {
  FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ValidatorFn,
  AsyncValidatorFn
} from '@angular/forms';
import {debounceTime, filter} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'component-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  @Input()
  queryPlaceholder: string;

  @Output()
  queryChanged = new EventEmitter();

  queryForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    const censor = (word: string): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
      if (control.value.indexOf(word) !== -1) {
        return {
          'badword': word
        }
      } else {
        return null
      }
    }

    type OptionalErrors = ValidationErrors | null;

    const asyncCensor = (word: string): AsyncValidatorFn => (control: AbstractControl): Observable<OptionalErrors> => {
      return Observable.create(observer => {
        setTimeout(() => {
          const isError = (control.value && control.value.indexOf(word) !== -1) ? {'badwordasync': word} : null;
          observer.next(isError);
          observer.complete();
        }, 5000);
      });
    }

    this.queryForm = new FormGroup({
      'query': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        censor('batman')], [
        asyncCensor('babcia')
      ])
    });
    this.queryForm.patchValue({
      'query': 'Initial value'
    })
    this.queryForm.valueChanges.pipe(
      filter(this.FilterValues),
      debounceTime(500))
      .subscribe(newValue => this.OnValueChanges(newValue, this.queryChanged));
  }

  FilterValues(value) {
    console.log('Incoming query: ', value.query, value.query.length < 3 ? ' (too short)' : '');
    return value.query.length >= 3;
  }

  OnValueChanges(newValue, eventEmmiter) {
    console.log('Value changes, new value: ', newValue);
    var query = newValue.query;
    if (this.queryForm.valid) {
      console.log('Emit query: ', query);
      eventEmmiter.emit(query);
    }
  }

  DoSearch() {
    console.log(this.queryForm);
    if (this.queryForm.valid) {
      console.log(this.queryForm);
    }
  }


}
