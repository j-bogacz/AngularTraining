import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Playlist} from "../playlist";
import {PlaylistsSourceService} from "../playlists-source.service";

@Component({
  selector: 'lekarz-playlists-wrapper',
  templateUrl: './playlists-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsWrapperComponent implements OnInit {

  listPlaylists: Playlist[] = this.playlistsSourceService.getPlaylists();

  constructor(private playlistsSourceService: PlaylistsSourceService) { }

  ngOnInit() {
  }

}
