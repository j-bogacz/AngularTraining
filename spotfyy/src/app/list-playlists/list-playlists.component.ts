import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Playlist {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
  color: string;
}

@Component({
  selector: 'lekarz-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  selected: Playlist;
  listPlaylists: Playlist[] = [
    {id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'},
    {id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: false, color: '#00ff00'},
    {id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
