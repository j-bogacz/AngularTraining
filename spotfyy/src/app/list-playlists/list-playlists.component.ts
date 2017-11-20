import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface PlayList {
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
  selectedPlaylist: PlayList;
  listPlaylists: PlayList[] = [
    { id: 1, name: 'Hity lat 80', description: 'Opis', favorite: true, color: '#ff0000'},
    { id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: true, color: '#ffff00'},
    { id: 3, name: 'Hity lat 90', description: 'Opis3', favorite: true, color: '#00ff00'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
