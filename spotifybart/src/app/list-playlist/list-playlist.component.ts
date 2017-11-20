import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

interface Playlist {
  id: number,
  name: string,
  description: string,
  favourite: boolean,
  color: string
  isActive:boolean
}

@Component({
  selector: 'bart-list-playlist',
  templateUrl: './list-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistComponent implements OnInit {

  selected: Playlist;
  listPlaylist: Playlist[] = [
    {id:1, name:'Hity lat 60', description: "Opis 60", favourite: true, color: "#FF0000", isActive:false},
    {id:2, name:'Hity lat 70', description: "Opis 70", favourite: false, color: "#CC3400",isActive:false},
    {id:3, name:'Hity lat 80', description: "Opis 80", favourite: true, color: "#220000", isActive:true}
  ]

  constructor() { }

  ngOnInit() {
  }

  SetActive(id:number) {
    this.listPlaylist
  }
}
