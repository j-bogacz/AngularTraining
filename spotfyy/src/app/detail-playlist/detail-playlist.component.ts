import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService, PlaylistObject} from '../playlist.service';


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
  playlist: Playlist = null;
  idPlaylist: number = 0;


  constructor(
    private activatetedRoute: ActivatedRoute,
    private playlistService: PlaylistService
  ) {
    this.activatetedRoute.params.subscribe(params => {
      this.playlist = new PlaylistObject(this.playlistService.getOnePlaylist( parseInt(params.id,10)));
    });
    this.idPlaylist =  parseInt(this.activatetedRoute.snapshot.params['id'], 10);
    this.playlist = new PlaylistObject(this.playlistService.getOnePlaylist(this.idPlaylist));
  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

  edit(){
    this.playlistService.updateOnePlaylist(<Playlist>this.playlist);
  }

}
