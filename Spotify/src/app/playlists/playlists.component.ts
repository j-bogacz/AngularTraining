import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "./interfaces";
import {PlaylistsAccessorService} from "./playlists-accessor.service";

@Component({
  selector: 'component-playlists',
  templateUrl: './playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[];

  constructor(private playlistsAccessorService: PlaylistsAccessorService) {
  }

  ngOnInit() {
    this.playlists = this.playlistsAccessorService.GetPlaylists();
  }
}
