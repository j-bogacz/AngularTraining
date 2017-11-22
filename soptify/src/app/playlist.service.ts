import { Injectable } from '@angular/core';
import {Playlist} from "./playlist";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PlaylistService {

  listPlaylists: Playlist[] = [
    {id: 1, name: 'Hity lat 80', description: 'Opis1', favorite: true, color: '#ff0000'},
    {id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: false, color: '#00ff00'},
    {id: 3, name: 'Hity lat 60', description: 'Opis3', favorite: false, color: '#0000ff'},
  ];

  loadProjects(): Observable<Playlist[]> {
    const prjLoader = Observable.create((observer: Observer<Playlist[]>) => {
      setTimeout(() => {
        observer.next(this.listPlaylists);
        observer.complete();
      }, 2000);
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
}
