import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../interfaces";

@Component({
  selector: 'lekarz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {


  searchUrl: string;

  @Output() searchChanged = new EventEmitter<string>();

  constructor(private spoti: SpotifyService) {

  }

  ngOnInit() {
  }



  searchMusic() {
    this.searchChanged.emit(this.searchUrl);
  }

}
