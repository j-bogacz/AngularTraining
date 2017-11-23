import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService} from '../playlist.service';
import {isNullOrUndefined} from "util";

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
  idPlayList: number;
  playlist: Playlist = {} as Playlist;
  editPlayList: Playlist;
  testData = new Date();

  constructor( private activatedRoute: ActivatedRoute,
               private playlistService: PlaylistService) {
    this.activatedRoute.params.subscribe( params => {
      this.idPlayList = parseInt(params.id,10);
      this.editPlayList = this.playlistService.getPlayList(this.idPlayList);

      this.copyPlayList();

    });
  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

  saveDetails(){
    this.isEditingMode = false;
    this.playlistService.setPlayList(this.editPlayList);
  }

  copyPlayList() {
    if (!this.editPlayList) return;
    this.playlist.id = this.editPlayList.id;
    this.playlist.color = this.editPlayList.color;
    this.playlist.favorite = this.editPlayList.favorite;
    this.playlist.name = this.editPlayList.name;
    this.playlist.description = this.editPlayList.description;

  }

}
