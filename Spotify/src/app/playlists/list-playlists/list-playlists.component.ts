import {Component, Input, Output, OnInit, ViewEncapsulation, EventEmitter} from '@angular/core';
import {Playlist} from '../interfaces';
import {PlaylistsAccessorService} from "../playlists-accessor.service";

@Component({
  selector: 'component-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: ['.list-group-item { border-right: 10px solid black;}'],
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

  constructor(private playlistsAccessorService: PlaylistsAccessorService) {
  }

  ngOnInit() {
    this.playlistsAccessorService.playlistChanged.subscribe(newPlaylists => this.playlists = newPlaylists);
  }
}
