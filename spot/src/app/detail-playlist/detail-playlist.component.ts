import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mk-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  title: string = 'Playlist detail';
  test: number = 0;
  playlist: {
    name: string,
    description: string,
    favourite: boolean,
    color: string
  } = {
    name: 'First',
    description: 'Description',
    favourite: true,
    color: '#00BCD4'
  };

  constructor() { }

  ngOnInit() {
  }

  returnGreen() {
    return 'green';
  }

}
