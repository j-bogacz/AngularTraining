import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {
  AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';
import {Observable} from "rxjs/Observable";

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

  private readonly censor = (word:string): ValidatorFn => (control: AbstractControl): ValidationErrors|null => {
    if(control.value.indexOf(word) !== -1) {
      return {
        'badword': word
      };
    } else {
      return null;
    }
  }


  ngOnInit() {
    type OptionalErrors = ValidationErrors|null;

    const asyncCensor = (word: string): AsyncValidatorFn => (control: AbstractControl): Observable<OptionalErrors> => {
      return Observable.create( observer => {
        setTimeout(() => {
          const isError = (control.value && control.value.indexOf(word) !== -1) ? {'badwordasync': word} : null;
          observer.next(isError);
          observer.complete();
        },5000);
      });
    };



    this.searchForm = new FormGroup({
      'keyword': new FormControl('pizza', [
          Validators.required,
          Validators.minLength(3),
          this.censor('aaa')
        ])
    });
    this.searchForm.valueChanges
      .pipe(
        debounceTime(800),
        filter(() => this.searchForm.valid)
      )
      .subscribe((dataIn) => {
        this.keywordChange.emit(dataIn.keyword);
    });
  }

  doSearch() {
    console.log(this.searchForm);
    if(this.searchForm.valid) {
      this.keywordChange.emit(this.searchForm.value.keyword);
    }


  }
}
