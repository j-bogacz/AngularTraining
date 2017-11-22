import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Playlist} from "../playlist";

@Component({
  selector: 'lekarz-playlists-wrapper',
  templateUrl: './playlists-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsWrapperComponent implements OnInit {

  listPlaylists: Playlist[] = [
    {id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'},
    {id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: false, color: '#00ff00'},
    {id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
