import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../playlist';
import {ActivatedRoute} from "@angular/router";
import {PlaylistObject, PlaylistsService} from "../playlists.service";

@Component({
  selector: 'mk-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  playlist: Playlist = null;
  idPlaylist: number = 0;
  editMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private playlistsService: PlaylistsService) {
    console.log('Starting DetailPlaylistComponent');
    this.activatedRoute.params.subscribe((params) => {
      this.idPlaylist = parseInt(params.id, 10);
      this.playlist = new PlaylistObject(playlistsService.getPlaylistById(this.idPlaylist));
      console.log('Showing playlist for id: ' + params.id, this.playlist);
    });
  }

  ngOnInit() {
  }

  save(playlist) {
    console.log('Saving playlist', playlist);
    this.editMode = false;
    this.playlistsService.savePlaylist(this.playlist);
  }

}
