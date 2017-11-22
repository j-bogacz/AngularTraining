import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Playlist} from "../playlist";
import { PlayListServiceService } from '../play-list-service.service';

@Component({
  selector: 'lekarz-wraper-play-lists',
  templateUrl: './wraper-play-lists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class WraperPlayListsComponent implements OnInit {

  listPlaylists: Playlist[];
  constructor(private playListSvc: PlayListServiceService)
  {
    this.listPlaylists = playListSvc.getPlayLists() as Playlist[];
    console.log(playListSvc.getPlayList(1));
  }

  ngOnInit() {
  }

}
