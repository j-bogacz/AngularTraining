import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../playlist";

@Component({
  selector: 'mk-playlists-wrapper',
  templateUrl: './playlists-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsWrapperComponent implements OnInit {

  listPlaylists: Playlist[] = [
    {id: 1, name: 'Chill', description: 'Chill music for the weekend', favourite: true, color: '#ff0000'},
    {id: 2, name: 'Relax', description: 'Relax music for the weekend', favourite: false, color: '#00ff00'},
    {id: 3, name: 'Jazz', description: 'Jazz music for the weekend', favourite: false, color: '#0000ff'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
