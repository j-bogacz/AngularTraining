import {Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'mk-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  selectedPlaylist: Playlist;
  @Input() listPlaylists: Playlist[];
  @Output() selectedChange = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onSelected(playlist) {
    this.selectedPlaylist = playlist;
    this.selectedChange.emit(playlist);
  }

}
