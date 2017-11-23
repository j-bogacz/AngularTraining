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
    console.log('Starting DetailPlaylistComponent');
    this.activatedRoute.params.subscribe((params) => {
      console.log('Showing playlist for id: ' + params.id, params);
      this.idPlaylist = parseInt(params.id, 10);
      this.playlist = playlists.getPlaylistById(this.idPlaylist);
    });
  }

  ngOnInit() {
  }

  save() {
    this.editMode = false;
  }

}
