import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {ActivatedRoute} from "@angular/router";
import {PlaylistServiceService} from "../playlist-service.service";

@Component({
  selector: 'lekarz-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [`
	    .card-title{
		    border-right:2px solid transparent;
	    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {
  isEditingMode: boolean = false;
  title: string = 'Playlist detail';
  test: number = 2;
  playlist: Playlist = {} as Playlist;
  idPlaylist: number = 0;

  constructor(
      private activatedRoute: ActivatedRoute,
      private playlistServiceService : PlaylistServiceService) {

    this.activatedRoute.params.subscribe(params => {
      this.idPlaylist = parseInt(params.id, 10);
      let playlistTmp = this.playlistServiceService.getPlaylist(this.idPlaylist);
      if (playlistTmp && playlistTmp.id) {
        this.playlist.id = playlistTmp.id;
        this.playlist.name = playlistTmp.name;
        this.playlist.description = playlistTmp.description;
        this.playlist.color = playlistTmp.color;
        this.playlist.favorite = playlistTmp.favorite;
      }
    });
    console.log(this.playlist);
  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

  updatePlaylist() {
    this.playlistServiceService.updateOnePlayList(this.playlist);
    this.isEditingMode = false;
  }

}
