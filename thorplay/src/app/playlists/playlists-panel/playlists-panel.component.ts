import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../../playlist";
import {PlaylistService} from "../playlist.service";

@Component({
  selector: 'kuku-playlists-panel',
  templateUrl: './playlists-panel.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsPanelComponent implements OnInit {
  title = 'Tere fere kuku';
  playlists: Playlist[];

  constructor(private playlistService: PlaylistService) {
    this.playlists = this.playlistService.getAllPlaylists();
  }

  ngOnInit() {
  }

}
