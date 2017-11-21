import { Component } from '@angular/core';
import {Playlist} from "./playlist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listPlaylist: Playlist[] = [
    {id:1, name:"Hity lat 80",description:'Piosenki z 80', favorite:true, color: '#030303'},
    {id:2, name:"Hity lat 70",description:'Piosenki z 70', favorite:true, color: '#030303'},
    {id:3, name:"Hity lat 90",description:'Piosenki z 90', favorite:true, color: '#030303'},
    {id:4, name:"Hip-Hop",description:'Czarny rap', favorite:true, color: '#030303'},
    {id:5, name:"Jazz",description:'Jazzzik', favorite:true, color: '#030303'}
  ]
}
