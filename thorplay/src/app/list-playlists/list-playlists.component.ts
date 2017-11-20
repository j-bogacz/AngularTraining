import {Component, OnInit, ViewEncapsulation} from '@angular/core';

interface Playlist {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
  color: string;
}

@Component({
  selector: 'kuku-list-playlists',
  templateUrl: './list-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistsComponent implements OnInit {
  listPlaylists: Playlist[] = [
    {id: 1, name: 'Hity lat 80tych', description: 'fajna lista z lat 80tych', favorite: false, color: '#00ff00'},
    {id: 2, name: 'Hity lat 70tych', description: 'fajna lista z lat 70tych', favorite: false, color: '#ff0000'},
    {id: 3, name: 'Hity lat 60tych', description: 'fajna lista z lat 60tych', favorite: true, color: '#0000ff'}
  ];

  currentPlaylist: Playlist;

  constructor() { }

  ngOnInit() {
  }

}
