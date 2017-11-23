import {EventEmitter, Injectable} from '@angular/core';
import {Playlist} from './playlist';

export class PlaylistObject implements Playlist {
  id: number;
  name: string;
  description: string;
  favourite: boolean;
  color: string;

  constructor(playlist: Playlist) {
    if (playlist && playlist.id) {
      this.id = playlist.id;
      this.name = playlist.name;
      this.description = playlist.description;
      this.favourite = playlist.favourite;
      this.color = playlist.color;
    }
  }
}

@Injectable()
export class PlaylistsService {

  changeList = new EventEmitter<Playlist[]>();

  constructor() {
  }

  listPlaylists: Playlist[] = [
    {id: 1, name: 'Chill', description: 'Chill music for the weekend', favourite: true, color: '#ff0000'},
    {id: 2, name: 'Relax', description: 'Relax music for the weekend', favourite: false, color: '#00ff00'},
    {id: 3, name: 'Jazz', description: 'Jazz music for the weekend', favourite: false, color: '#0000ff'}
  ];

  getPlaylists() {
    return this.listPlaylists;
  }

  getPlaylistById(id: number) {
    return this.listPlaylists.find(p => p.id === id);
  }

  savePlaylist(playlist: Playlist) {
    this.listPlaylists = this.listPlaylists.map(p => {
      return (p.id === playlist.id ? playlist : p);
    });
    this.changeList.emit(this.listPlaylists)
    console.log('Saved playlist', this.listPlaylists);
  }

}
