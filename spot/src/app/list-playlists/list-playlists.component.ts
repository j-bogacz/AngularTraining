import {Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'mk-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [`
    .list-group-item {
      border-left: 10px solid #9E9E9E;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  selectedPlaylist: Playlist;
  @Input() listPlaylists: Playlist[];
  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected(playlist) {
    this.selectedPlaylist = playlist;
    this.selectedChange.emit(playlist);
    console.log(playlist);
  }

}
