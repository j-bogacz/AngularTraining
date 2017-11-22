import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {
  AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn,
  Validators
} from "@angular/forms";
import {debounceTime, filter} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'lekarz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  @Output() searchChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

    const censor = (word: string): ValidatorFn => (control: AbstractControl): ValidationErrors|null => {
      if (control.value && control.value.indexOf(word) !== -1) {
        return {
          'badword': word
        };
      }else {
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
        },2000);
      });
    }

    this.searchForm = new FormGroup({
      'word': new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        censor('batman')
      ], [
        asyncCensor('babcia')
      ])
    });

    this.searchForm.valueChanges.pipe(
      filter(() => this.searchForm.valid),
      debounceTime(500)
    ).subscribe((dataIn) => {
      this.searchChanged.emit(dataIn.word);
    });
  }


  doSearch() {
    if (this.searchForm.valid) {
      this.searchChanged.emit(this.searchForm.value.word);
    }
  }
}
