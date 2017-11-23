import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';


@Component({
  selector: 'lekarz-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [ '.list-group-item { border-left: 10px solid transparent }'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  selected: Playlist;
  filterValue: string;
  @Input() listPlaylists: Playlist[];
  @Output() selectedChanged = new EventEmitter<Playlist>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(playlist){
    this.selectedChanged.emit(playlist);
    this.selected = playlist;
  }
}
