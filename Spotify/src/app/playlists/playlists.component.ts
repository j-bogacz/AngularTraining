import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "./interfaces";

@Component({
  selector: 'component-playlists',
  templateUrl: './playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[] = [
    {
      id: 1,
      name: "Hity lat 90",
      description: "Opis listy hitow lat 80",
      favorite: true,
      color: "#ff0000"
    },
    {
      id: 2,
      name: "Hity lat 80",
      description: "Opis listy hitow lat 70",
      favorite: false,
      color: "#00ff00"
    },
    {
      id: 3,
      name: "Hity lat 70",
      description: "Opis listy hitow lat 70",
      favorite: false,
      color: "#0000ff"
    },
    {
      id: 4,
      name: "Hity lat 60",
      description: "Opis listy hitow lat 60",
      favorite: false,
      color: "#ff00ff"
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
