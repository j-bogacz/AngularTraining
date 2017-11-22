
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {ActivatedRoute} from "@angular/router";
import {PlaylistsSourceService} from "../playlists-source.service";


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
  playlist: Playlist;
  idPlaylist: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private playlistsSourceService: PlaylistsSourceService) {
    this.idPlaylist = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.playlist = this.playlistsSourceService.getPlaylist(this.idPlaylist);
  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

}
