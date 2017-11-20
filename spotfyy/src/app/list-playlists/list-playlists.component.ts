import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { PlayList } from '../playlist';

@Component({
  selector: 'lekarz-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  selectedPlaylist: PlayList;
  @Input() listPlaylists: PlayList[];
  @Output() selectedChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelected(playlist){
    this.selectedChange.emit(playlist);
    console.log(playlist);
  }
}
