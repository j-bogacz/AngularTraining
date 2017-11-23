import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PlaylistService} from '../playlist.service';
import {Playlist} from '../playlist';

@Component({
  selector: 'lekarz-wraper-playlists',
  templateUrl: './wraper-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WraperPlaylistsComponent implements OnInit {

  listPlaylists: Playlist[] = [];

  constructor(private playlistService: PlaylistService) {
    this.listPlaylists = this.playlistService.getPlaylists();
    this.playlistService.changeList.subscribe( (newListPlaylist: Playlist[]) => {
      this.listPlaylists = newListPlaylist;
    });
  }

  ngOnInit() {
  }

}
