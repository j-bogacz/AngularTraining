import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
import { Playlist } from "../playlist"

@Component({
  selector: 'bart-list-playlist',
  templateUrl: './list-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistComponent implements OnInit {

  selected: Playlist;
  @Input() listPlayList: Playlist[];
  @Output() selectedChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelected(playList) {
    this.selectedChange.emit(playList);
    this.selected = playList;
  }

}
