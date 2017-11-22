import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../../playlist';


@Component({
  selector: 'kuku-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [`
    :host-context(.red) {
      color: red !important;
    }

    :host(.bordered) {
      border: 1px solid black;
      border-radius: 5px;
      display: block;
    }

    :host(.pink) /deep/ p {
      color: hotpink;
    }

    .list-group-item {
      border-left: 5px solid transparent;
    }

    a:visited {
      color: black;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  @Input() listPlaylists: Playlist[];

  @Output() onCurrentPlaylistChange = new EventEmitter<Playlist>();
  currentPlaylist: Playlist;
  hover: number = 0;

  constructor() { }

  ngOnInit() {
  }

  selectPlaylist(playlist) {
    console.log(playlist);
    this.onCurrentPlaylistChange.emit(playlist);
    this.currentPlaylist = playlist;
  }

  setSpecialColor(event, playlist) {
    event.target.style.borderLeftColor = playlist.color;
  }

  setNormalColor(event) {
    event.target.style.borderLeftColor = 'transparent';
  }
}
