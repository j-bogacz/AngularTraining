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
  @Input() listPlaylists: Playlist[];
  @Output() selectedChange = new EventEmitter<Playlist>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(playlist) {
    this.selectedChange.emit(playlist);
    this.selected = playlist;
  }

}
