import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Playlist{
  id:number;
  name : string;
  description: string;
  favorite: boolean;
  color: string;
  selected: boolean;
}

@Component({
  selector: 'butelka-list-playlist',
  templateUrl: './list-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  listPlaylists: Playlist[] = [
    {id:1, name:"Hity lat 80",description:'Piosenki z 80', favorite:true, color: '#030303', selected: true},
    {id:2, name:"Hity lat 70",description:'Piosenki z 70', favorite:true, color: '#030303', selected: false},
    {id:3, name:"Hity lat 90",description:'Piosenki z 90', favorite:true, color: '#030303', selected: false},
    {id:4, name:"Hip-Hop",description:'Czarny rap', favorite:true, color: '#030303', selected: false},
    {id:5, name:"Jazz",description:'Jazzzik', favorite:true, color: '#030303', selected: false}
  ]

}
