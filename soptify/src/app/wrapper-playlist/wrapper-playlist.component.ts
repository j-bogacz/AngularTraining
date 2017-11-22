import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Playlist} from "../playlist";

@Component({
  selector: 'lekarz-wrapper-playlist',
  templateUrl: './wrapper-playlist.component.html',
  styleUrls: ['./wrapper-playlist.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperPlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
