import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';
import {PlaylistService} from "../playlist.service";
import {Router} from "@angular/router";


@Component({
  selector: 'lekarz-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [`
    :host-context(.red){
      color: red !important;
    }
    :host(.bordered){
      border:1px solid black;
      display:block;
    }
    :host(.pink) /deep/ p {
      color: hotpink;
    }
    .list-group-item{
      border-left: 10px solid transparent;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {

  query: string;
  selected: Playlist;
  @Input('listPlaylistsTmp') listPlaylists: Playlist[];
  @Output() selectedChanged = new EventEmitter<Playlist>();

  constructor(private playSvc: PlaylistService, private router: Router) {
    this.playSvc.loadPlaylist().subscribe( playlist =>
    this.listPlaylists = playlist);

    // this.listPlaylists = this.playSvc.loadStuff();
    // console.log(this.listPlaylists);
  }

  ngOnInit() {
  }
  onSelected(playlist){
    this.selectedChanged.emit(playlist);
    //this.router.navigate('/playlist' + playlist.id);
  }

  getOne(id: number){
    this.playSvc.getOnePlaylist(id);
  }
}
