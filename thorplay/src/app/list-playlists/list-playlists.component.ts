import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../playlist';

@Component({
  selector: 'kuku-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  @Input() listPlaylists: Playlist[];

  @Output() onCurrentPlaylistChange = new EventEmitter<Playlist>();
  currentPlaylist: Playlist;

  constructor() { }

  ngOnInit() {
  }

  selectPlaylist(playlist) {
    this.onCurrentPlaylistChange.emit(playlist);
    this.currentPlaylist = playlist;
  }
}
