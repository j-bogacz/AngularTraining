import { Injectable } from '@angular/core';
import {Playlist} from "./playlist";

@Injectable()
export class PlayListServiceService {


  constructor() { }

  getPlayLists() {
    return [
      {id: 1, name: 'Hity lat 90', description: 'Opis hitow lat 90...', favorite: true, color: '#ff0000'},
      {id: 2, name: 'Hity lat 80', description: 'Opis hitow lat 80...', favorite: false, color: '#00ff00'},
      {id: 3, name: 'Hity lat 70', description: 'Opis hitow lat 70...', favorite: false, color: '#0000ff'},
      {id: 4, name: 'Hity lat 60', description: 'Opis hitow lat 60...', favorite: false, color: '#0000ff'},
      {id: 5, name: 'Hity XXI wieku', description: 'Opis hitow XXI wieku...', favorite: false, color: '#0000ff'},
    ];
  }

  getPlayList(id: number) {
    return this.getPlayLists().find(playList => playList.id == id);
    };
  }

