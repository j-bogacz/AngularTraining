import {Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../playlist";
import { PlayListServiceService } from '../play-list-service.service';
import {Observable} from "rxjs/Observable";

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
   // this.playListSvc.listChanged.unsubscribe((newPlayList: Playlist[]) => {
     // this.listPlaylists = newPlayList
    //})
  }

  ngOnInit() {
  }

}
