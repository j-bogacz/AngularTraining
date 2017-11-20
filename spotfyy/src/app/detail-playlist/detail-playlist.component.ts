import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lekarz-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  title : string = 'Playlist detail';
  playlist: {
    name: string,
    description: string,
    favorite: boolean,
    color: string
  } = {
    name: 'Pierwsza',
    description: 'Opis pierwszej',
    favorite: false,
    color: '#ff0000'
  }
  showHide : boolean = false;
  //playlistName : string = 'Pierwsza';
  //playlistDescription : string = 'Opis pierwszej';
  //playlistColor : string = '#ff0000';

  constructor() {
    console.log(this.playlist);
  }

  ngOnInit() {
  }

}
