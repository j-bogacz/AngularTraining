import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Playlist {
  id: number;
  name: string;
  description: string;
  favourite: boolean;
  color: string;
}
@Component({
  selector: 'mk-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {

  selectedPlaylist: Playlist;

  listPlaylists: Playlist[] = [
    {id: 1, name: 'Chill', description: 'Chill music for the weekend', favourite: true, color: '#00BCD4'},
    {id: 2, name: 'Relax', description: 'Relax music for the weekend', favourite: false, color: '#11BCD4'},
    {id: 3, name: 'Jazz', description: 'Jazz music for the weekend', favourite: false, color: '#22BCD4'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
