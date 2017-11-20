import {Component, Input, Output, OnInit, ViewEncapsulation, EventEmitter} from '@angular/core';
import {Playlist} from '../playlist';

@Component({
  selector: 'component-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {

  title: string = 'Playlist';

  @Input()
  playlists: Playlist[];

  @Input()
  selectedPlaylist: Playlist;

  @Output()
  selectedPlaylistChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  SelectPlaylist(selectedPlaylist){
    this.selectedPlaylist = selectedPlaylist;
    this.selectedPlaylistChanged.emit(this.selectedPlaylist);
  }
}
