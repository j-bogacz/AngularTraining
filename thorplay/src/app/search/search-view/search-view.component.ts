import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {debounceTime, filter} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'kuku-search-view',
  templateUrl: './search-view.component.html',
  styles: [`
    .card {
      margin-bottom: 15px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchViewComponent implements OnInit {
  @Output() onSearchTextChange = new EventEmitter<string>();
  searchForm: FormGroup;

  constructor() {
  }


  ngOnInit() {
    type OptionalErrors = ValidationErrors | null;

    const asyncCensor = (word: string): AsyncValidatorFn => (control: AbstractControl): Observable<OptionalErrors> => {
      return Observable.create(observer => {
        setTimeout(() => {
          const isError = (control.value && control.value.indexOf(word) !== -1) ? {'badwordasync': word} : null;
          observer.next(isError);
          observer.complete();
        }, 2000);
      });
    };

    const censor = (word: string): ValidatorFn => (control: AbstractControl): OptionalErrors => {
      if (control.value && control.value.indexOf(word) !== -1) {
        return {
          'cenzura': word
        };
      } else {
        return null;
      }
    };

    this.searchForm = new FormGroup({
      'query': new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        censor('babcia')
      ]/*, [
        asyncCensor('dziadek')
      ]*/)
    });
    this.searchForm.valueChanges.pipe(
      filter(t => {
        return this.searchForm.valid;
      }),
      debounceTime(600)
    ).subscribe((dataIn) => {
      console.log('auto:', dataIn);
      this.onSearchTextChange.emit(dataIn.query);
    });
  }

//folk
  searchSpotify() {
    if (this.searchForm.valid) {
      this.onSearchTextChange.emit(this.searchForm.value.query);
    }
    console.log(this.searchForm);
  }
}
