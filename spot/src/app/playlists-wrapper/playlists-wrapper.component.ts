import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../playlist";
import {PlaylistsService} from "../playlists.service";

@Component({
  selector: 'mk-playlists-wrapper',
  templateUrl: './playlists-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsWrapperComponent implements OnInit {

  listPlaylists: Playlist[];

  constructor(private playlists: PlaylistsService) {
    this.listPlaylists = playlists.getPlaylists();
    console.log(playlists.getPlaylistById(1));
    playlists.changeList.subscribe((p: Playlist[]) => this.listPlaylists = p);
  }

  ngOnInit() {
  }

}
