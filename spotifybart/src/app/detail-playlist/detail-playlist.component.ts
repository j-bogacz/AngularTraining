import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'bart-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [` 
    .card-title {
      border-right: 2px solid transparent;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  title: string = "Playlist details";
  test: number = 1;
  playlist: {
    name: string,
    description: string,
    favourite: boolean,
    color: string
  } = {
    name: "Pierwsza",
    description: "Opis pierwszej",
    favourite: true,
    color: "#aa0000"
  };
  editMode: boolean = false;
  playlistName: string = "Pierwsza";
  playlistdescription: string = "Opis listy pierwszej";
  playlistColour: string = "#aa0000";


  constructor() {
    console.log(this);
  }

  ngOnInit() {
  }

  returnGreen() {
    return "green";
  }
}
