import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Playlist} from "../playlist";
import {PlaylistService} from "../playlist.service";

@Component({
  selector: 'lekarz-wrapper-playlist',
  templateUrl: './wrapper-playlist.component.html',
  styleUrls: ['./wrapper-playlist.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperPlaylistComponent implements OnInit {

  listPlaylist: Playlist[] = [];
  constructor(private playlistSvc: PlaylistService) {
    //
    // this.playlistSvc.loadPlaylist().subscribe( playlist =>
    //   this.listPlaylist = playlist);

    this.playlistSvc.changeList.subscribe((newListPlaylist: Playlist[]) =>{
      this.listPlaylist = newListPlaylist;
      console.log('wrapper odpalony');
      }
    );


  }

  ngOnInit() {
  }

}
