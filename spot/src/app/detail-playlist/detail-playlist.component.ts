import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../playlist';
import {ActivatedRoute} from "@angular/router";
import {PlaylistsService} from "../playlists.service";

@Component({
  selector: 'mk-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  playlist: Playlist;
  idPlaylist: number = 0;
  editMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, playlists: PlaylistsService) {
    this.idPlaylist = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.playlist = playlists.getPlaylistById(this.idPlaylist);
  }

  ngOnInit() {
  }

}
