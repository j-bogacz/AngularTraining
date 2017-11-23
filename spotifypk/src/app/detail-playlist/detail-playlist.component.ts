import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Playlist } from '../playlist';
import {ActivatedRoute} from "@angular/router";
import {PlayListServiceService} from "../play-list-service.service";

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
  idPlayList: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private playListSvc: PlayListServiceService) {
    this.activatedRoute.params.subscribe(p => {
      this.idPlayList = parseInt(this.activatedRoute.snapshot.params['id'], 10);
      const tempPlayList = this.playListSvc.getPlayList(this.idPlayList);
      if(tempPlayList){
        if(!this.playlist){
          this.playlist = {};
        }
        this.playlist.id = tempPlayList.id;
        this.playlist.name = tempPlayList.name;
        this.playlist.description = tempPlayList.description;
        this.playlist.color = tempPlayList.color;
        this.playlist.favorite = tempPlayList.favorite;
      }
    });

  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

  doUpdate(selectedPlaylist: Playlist){
    this.isEditingMode = false;
    this.playListSvc.updatePlayList(selectedPlaylist);
  }

}
