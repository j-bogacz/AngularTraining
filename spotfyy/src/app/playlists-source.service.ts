import {EventEmitter, Injectable, Output} from '@angular/core';
import {Playlist} from "./playlist";

export class PlaylistObject implements Playlist {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
  color: string;

  constructor(playlist: Playlist) {
    if(playlist && playlist.id) {
      this.id = playlist.id;
      this.name = playlist.name;
      this.description = playlist.description;
      this.favorite = playlist.favorite;
      this.color = playlist.color;
    }
  }
}

@Injectable()
export class PlaylistsSourceService {

  changeList = new EventEmitter<Playlist[]>();

  listPlaylists: Playlist[] = [
    new PlaylistObject({id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'}),
    new PlaylistObject({id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: false, color: '#00ff00'}),
      new PlaylistObject({id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'}),
  ];

  constructor() { }

  getPlaylists() {
    return this.listPlaylists;
  }

  getPlaylist(id: number) {
    return this.listPlaylists.find(el => el.id === id);
    //console.log();
  }

  setPlaylist(playlist: Playlist) {
    const ind = this.listPlaylists.findIndex(el => el.id === playlist.id);
    console.log(this.listPlaylists);
    if(ind > -1) {
      this.listPlaylists[ind] = playlist;
      console.log(this.listPlaylists);
    }
  }

  updateOnePlaylist(newPlaylist: Playlist) {
    this.listPlaylists = this.listPlaylists.map(play => {
      return (play.id === newPlaylist.id ? newPlaylist : play);
    });
    this.changeList.emit(this.listPlaylists);
  }



}
