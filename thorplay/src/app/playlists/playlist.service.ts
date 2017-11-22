import {Injectable} from '@angular/core';
import {Playlist} from '../playlist';

@Injectable()
export class PlaylistService {
  mockPlaylists: Playlist[];

  constructor() {
    this.mockPlaylists = [
      {id: 1, name: 'Hity lat 80tych', description: 'fajna lista z lat 80tych', favorite: false, color: '#00ff00'},
      {id: 2, name: 'Hity lat 70tych', description: 'fajna lista z lat 70tych', favorite: false, color: '#ff0000'},
      {id: 3, name: 'Hity lat 60tych', description: 'fajna lista z lat 60tych', favorite: true, color: '#0000ff'}
    ];

  }

  getPlaylistsByName(text: string): Playlist {
    return this.mockPlaylists.find(item => {
      return item.name.toLowerCase().indexOf(text) > -1;
    });
  }

  getPlaylistsById(id: number): Playlist {
    return this.mockPlaylists.find(item => {
      return item.id === id;
    });
  }

  getAllPlaylists(): Playlist[] {
    return this.mockPlaylists;
  }
}

