import { Injectable, Output, EventEmitter } from '@angular/core';
import {Playlist} from "./playlist";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class PlayListServiceService {


  constructor() { }

  internalPlayLists: Playlist[] = [
    {id: 1, name: 'Hity lat 90', description: 'Opis hitow lat 90...', favorite: true, color: '#ff0000'},
    {id: 2, name: 'Hity lat 80', description: 'Opis hitow lat 80...', favorite: false, color: '#00ff00'},
    {id: 3, name: 'Hity lat 70', description: 'Opis hitow lat 70...', favorite: false, color: '#0000ff'},
    {id: 4, name: 'Hity lat 60', description: 'Opis hitow lat 60...', favorite: false, color: '#0000ff'},
    {id: 5, name: 'Hity XXI wieku', description: 'Opis hitow XXI wieku...', favorite: false, color: '#0000ff'},
    ];

  getPlayLists() {
    return this.internalPlayLists;
  }

  getPlayList(id: number) {
    return this.getPlayLists().find(playList => playList.id == id);
    };


  @Output() listChanged = new EventEmitter<Playlist[]>();

  updatePlayList2(newPlayList: Playlist){
    this.internalPlayLists = this.internalPlayLists.map( playList => {
      return (playList.id === newPlayList.id ? newPlayList : playList);
    });
    this.listChanged.emit(this.internalPlayLists);
  }


  updatePlayList(playListToUpdate: Playlist){

        this.internalPlayLists.forEach(function(element, index, array)
        {
            if(playListToUpdate.id == element.id){
              element.name = playListToUpdate.name;
              element.description = playListToUpdate.description;
              element.favorite= playListToUpdate.favorite;
              element.color = playListToUpdate.color;
              console.log('Play list with id: ' + playListToUpdate.id + ' has been updated');
            }
        });
    });
  }

