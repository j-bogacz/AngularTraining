import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../../playlist';
import {Router} from "@angular/router";


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
  @Input() playlistId: number = 0;
  @Input() listPlaylists: Playlist[];
  query: string = '';

  currentPlaylist: Playlist;
  hover: number = 0;

  constructor(private _router: Router) {
    console.log('lista.konstruktor:', this.playlistId);
  }

  ngOnInit() {
    console.log('lista.init:', this.playlistId);
  }

  selectPlaylist(playlist) {
    this.playlistId = playlist.id;
    this._router.navigate(['/playlists', playlist.id]);
  }

  setSpecialColor(event, playlist) {
    event.target.style.borderLeftColor = playlist.color;
  }

  setNormalColor(event) {
    event.target.style.borderLeftColor = 'transparent';
  }
}
