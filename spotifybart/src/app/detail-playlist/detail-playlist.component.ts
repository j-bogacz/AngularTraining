import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bart-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
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
  } =  {
    name : "Pierwsza",
    description: "Opis pierszrj",
    favourite: true,
    color: "#aa0000"
  };

  playlistName: string = "Pierwsza";
  playlistdescription: string = "Opis pierwszej";
  playlistColour: string = "#aa0000";


  constructor() { }

  ngOnInit() {
  }

    returnGreen() {
      return "green";
    }
}
