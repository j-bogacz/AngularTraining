
import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Playlist } from '../playlist';
import {PlaylistsSourceService} from "../playlists-source.service";

@Component({
  selector: 'lekarz-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [`
    .list-group-item {
    border-left: 10px solid transparent;
  }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {

  selected: Playlist;
  @Input() listPlaylists: Playlist[];
  @Output() selectedChanged = new EventEmitter();
  constructor(private playlistsSourceService: PlaylistsSourceService) { }

  ngOnInit() {
  }
  onSelected(playlist){
    this.selectedChanged.emit(playlist);

    this.selected = playlist;

  }


}
