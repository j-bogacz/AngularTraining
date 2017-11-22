import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, filter} from "rxjs/operators";

@Component({
  selector: 'lekarz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  @Output() searchChanged = new EventEmitter<string>();

  constructor(private spoti: SpotifyService) {  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'word' : new FormControl('cos tam cos tam',[
        Validators.required,
        Validators.minLength(3)
      ])
    });
    this.searchForm.valueChanges.pipe(
      filter(query => query.word.length >= 3),
      debounceTime(500)
    ).subscribe((dataIn) => {
      console.log(dataIn);
      this.searchChanged.emit(dataIn.word);
    });
  }
}
