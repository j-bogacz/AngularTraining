import { Injectable, EventEmitter } from '@angular/core';
import {Playlist} from './playlist';


@Injectable()
export class PlaylistService {

  listPlaylists: Playlist[] = [
    {id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'},
    {id: 2, name: 'Hity lat 80 /90', description: 'Opis2', favorite: false, color: '#00ff00'},
    {id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'},
  ];

  changeList = new EventEmitter<Playlist[]>();

  constructor() { }

  getPlaylists() {
    return this.listPlaylists;
  }

  getPlayList(id: number) {
    return this.listPlaylists.find( elem => elem.id === id);
  }

  setPlayList(newPlaylist: Playlist){
    this.listPlaylists = this.listPlaylists.map( playlist => {
      return (playlist.id === newPlaylist.id ? newPlaylist: playlist)
    });
    this.changeList.emit(this.listPlaylists);
  }

}
