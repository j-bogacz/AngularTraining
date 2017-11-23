import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService} from '../playlist.service';

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
  idPlayList: number;
  playlist: Playlist = null;

  constructor( private activatedRoute: ActivatedRoute,
               private playlistService: PlaylistService) {
    this.activatedRoute.params.subscribe( params => {
      this.idPlayList = parseInt(params.id,10);
      this.playlist = this.playlistService.getPlayList(this.idPlayList);
    })
    this.idPlayList = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.playlist = this.playlistService.getPlayList(this.idPlayList);
  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

}
