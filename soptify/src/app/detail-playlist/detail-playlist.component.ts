import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'butelka-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  constructor() {
    console.log(this);
  }

  ngOnInit() {
  }

  title:string = "Playlist detail";

  playlist: {
    name : string,
    description: string,
    favorite: boolean,
    color: string
  }=
    {
    name : 'Pierwsza',
    description: 'Pierwszy opis',
    favorite: false,
    color: '#5655ff'
  }
}
