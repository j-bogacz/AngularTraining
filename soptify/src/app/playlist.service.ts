import {EventEmitter, Injectable, Output} from '@angular/core';
import {Playlist} from "./playlist";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

export class PlaylistObject implements Playlist{
  id: number
  name: string
  description: string
  favorite: boolean
  color: string
  constructor(dataIn) {
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

  changeList = new EventEmitter<Playlist[]>();

  updatedPlaylist: Playlist;
  listPlaylists: Playlist[] = [
    {id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'},
    {id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: false, color: '#00ff00'},
    {id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'},
  ];

  loadPlaylist(): Observable<Playlist[]> {
    const prjLoader = Observable.create((observer: Observer<Playlist[]>) => {
      setTimeout(() => {
        observer.next(this.listPlaylists);
        observer.complete();
      }, 0);
    });
    return prjLoader;
  }
  loadStuff() {
    return this.listPlaylists;
  }

  constructor() {
  }


  getOnePlaylist(id: number) {
    return this.listPlaylists.find(plalist => plalist.id === id );
  }

  updateOnePlaylist(newPlaylist: Playlist) {
    this.listPlaylists = this.listPlaylists.map(
      playlist => {
        return(playlist.id === newPlaylist.id ? newPlaylist : playlist)
      });
    this.changeList.emit(this.listPlaylists);
  }
}
