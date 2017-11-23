import {EventEmitter, Injectable} from '@angular/core';
import {Playlist} from './playlist';

export class PlaylistObject implements Playlist {
  id: number
  name: string
  description: string
  favorite: boolean
  color: string
  constructor(dataIn: Playlist) {
    if (dataIn && dataIn.id) {
      this.id = dataIn.id;
      this.name = dataIn.name;
      this.description = dataIn.description;
      this.favorite = dataIn.favorite;
      this.color = dataIn.color;
    }
  }
}
@Injectable()
export class PlaylistService {
  listPlaylists: Playlist[] = [
    new PlaylistObject({id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'}),
    new PlaylistObject({id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: false, color: '#00ff00'}),
    new PlaylistObject({id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'})
  ];
  changeList = new EventEmitter<Playlist[]>()
  constructor() { }

  getPlaylists() {
    return this.listPlaylists;
  }

  getOnePlaylist(id: number) {
    return this.listPlaylists.find( playlist => playlist.id === id);
  }
  updateOnePlaylist(newPalyList: Playlist) {
    this.listPlaylists = this.listPlaylists.map( playlist => {
      return (playlist.id === newPalyList.id ? newPalyList: playlist);
    });
    this.changeList.emit(this.listPlaylists);
  }

}
