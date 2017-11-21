import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';


@Component({
  selector: 'butelka-list-playlists',
  templateUrl: './list-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  selected: Playlist;
  @Input() listPlaylists: Playlist[];
  @Output() selectedChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelected(playlist){
    this.selectedChange.emit(playlist);
    this.selected = playlist;
  }
}
