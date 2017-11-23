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
        }, 1000);
      });
    }

    // this.queryForm = new FormGroup({
    //   'query': new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //     censor('batman')
    //   ])
    // });

    // version using async validator
    this.queryForm = new FormGroup({
      'query': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        censor('batman')], [
        asyncCensor('Westbama')
      ])
    });

    this.queryForm.patchValue({
      'query': 'Westbam'
    })
    this.queryForm.valueChanges.pipe(
      debounceTime(500),
      filter(value => this.FilterValues(value, this.queryForm)))
      .subscribe(this.OnValueChanges);
  }

  FilterValues(value, formGroup) {
    console.log('Incoming query: ', value.query, formGroup.invalid ? ' (invalid)' : '');
    return formGroup.valid;
  }

  OnValueChanges(newValue) {
    console.log('Value changes, new value: ', newValue);
  }

  DoSearch() {
    console.log('Current query form: ', this.queryForm);
    if (this.queryForm.valid) {
      var query = this.queryForm.value.query;
      console.log('Emit query: ', query);
      this.queryChanged.emit(query);
    }
  }


}
