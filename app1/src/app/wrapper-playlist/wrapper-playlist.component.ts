import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../playlist';
import {PlaylistService} from '../playlist.service';

@Component({
  selector: 'abc-wrapper-playlist',
  templateUrl: './wrapper-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperPlaylistComponent implements OnInit {

  listPlaylists: Playlist[];
  oneList: Playlist;

  constructor(private playlistService: PlaylistService) {
    this.listPlaylists = playlistService.getPlaylists();
    this.playlistService.changeList.subscribe((newListPlayList: Playlist[]) => {
      this.listPlaylists = newListPlayList;
    });
  }


  ngOnInit() {
  }

}
