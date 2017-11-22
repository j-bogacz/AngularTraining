import {Injectable} from '@angular/core';
import {Playlist} from './playlist';

@Injectable()
export class PlaylistsService {

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

}
