import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../../playlist";
import {PlaylistService} from "../playlist.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'kuku-playlists-panel',
  templateUrl: './playlists-panel.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsPanelComponent implements OnInit {
  playlistId: number = 0;
  title = 'Tere fere kuku';
  playlists: Playlist[];

  constructor(private playlistService: PlaylistService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.playlistId = 0;
    this.playlists = this.playlistService.getAllPlaylists();
    playlistService.onPlaylistsChange.subscribe(lista => {
      this.playlists = lista;
    });
  }

  ngOnInit() {
  }

  onAcvtivate(event) {
    this.playlistId = event.playlistId;
  }

}
