import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Playlist} from "../playlist";
import { PlaylistServiceService } from "../playlist-service.service"

@Component({
  selector: 'bart-wraper-playlist',
  templateUrl: './wraper-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WraperPlaylistComponent implements OnInit {

  listPlaylists: Playlist[] = [];
  constructor(private playlistService : PlaylistServiceService ) {
    this.listPlaylists = playlistService.playlists;
    this.playlistService.changeList.subscribe((newListPlayList: Playlist[]) => {
      this.listPlaylists = newListPlayList;
    })
  }

  ngOnInit() {
  }

}
