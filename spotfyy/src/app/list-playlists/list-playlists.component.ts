
import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'lekarz-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {

  selected: Playlist;
  @Input() listPlaylists: Playlist[];
  @Output() selectedChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelected(playlist){
    this.selectedChanged.emit(playlist);

    this.selected = playlist;

  }
}
