import { Component } from '@angular/core';
import { Playlist } from "./playlist"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected: Playlist;
  listPlaylists: Playlist[] = [
    {id:1, name:'Hity lat 60', description: "Opis 60", favourite: true, color: "#FF0000", isActive:false},
    {id:2, name:'Hity lat 70', description: "Opis 70", favourite: false, color: "#CC3400",isActive:false},
    {id:3, name:'Hity lat 80', description: "Opis 80", favourite: true, color: "#220000", isActive:true}
  ]
  constructor(){
        this.selected = this.listPlaylists[0];
      }
}
