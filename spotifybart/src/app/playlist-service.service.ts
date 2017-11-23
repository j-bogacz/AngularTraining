import { Injectable, EventEmitter } from '@angular/core';
import {Playlist} from "./playlist";

@Injectable()
export class PlaylistServiceService {

  playlists: Playlist[];

  changeList = new EventEmitter<Playlist[]>();
  constructor() {
    this.playlists = [
      {id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'},
      {id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: false, color: '#00ff00'},
      {id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'},
    ];
  }

  getPlaylist(id:number)  {
    return this.playlists.find(list => list.id == id);
  }

  getPlaylsits() {
    return this.playlists;
  }

  updatePlaylist(playlist: Playlist) {
    console.log(playlist);
    let  pl = this.playlists.find(list => list.id == playlist.id);
    pl = playlist;
  }

  updateOnePlayList(newPlayList: Playlist) {
    this.playlists = this.playlists.map( playlist => {
      return (playlist.id === newPlayList.id ? newPlayList : playlist);
    });
    console.log(this.playlists);
    this.changeList.emit(this.playlists);
  }
}
