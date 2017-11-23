import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {ActivatedRoute} from "@angular/router";
import {PlaylistService} from "../playlist.service";

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
  playlist: Playlist =null;
  playlistId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private playSvc: PlaylistService) {
    this.activatedRoute.params.subscribe(params =>{
      this.playlistId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
      this.playlist = this.playSvc.getOnePlaylist(this.playlistId);
    });
  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

}
