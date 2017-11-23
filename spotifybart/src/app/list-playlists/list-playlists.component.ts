import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';


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
  selected: Playlist;
  query:string;
  @Input('listPlaylistsTmp') listPlaylists: Playlist[];
  @Output() selectedChanged = new EventEmitter<Playlist>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(playlist){
    this.selectedChanged.emit(playlist);
    this.selected = playlist;
  }

}
