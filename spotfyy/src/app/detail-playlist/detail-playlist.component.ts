import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lekarz-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [`
	    .card-title{
		    border-right:2px solid transparent;
	    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {
  isEditingMode: boolean = false;
  title: string = 'Playlist detail';
  test: number = 2;
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
  };
  // playlistName: string = 'Pierwsza';
  // playlistDescription: string = 'Opis pierwszej';
  // playlistColor: string = '#ff0000';

  constructor() {
    this.playlist.name = 'Druga';
    console.log(this.playlist);
  }

  ngOnInit() {
  }

  returnGreen(){
    return 'green';
  }

}
