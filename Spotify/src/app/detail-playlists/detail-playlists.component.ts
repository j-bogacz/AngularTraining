import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistsComponent implements OnInit {

  title: string = 'Playlist detail';

  playlist: {
    name: string,
    description: string,
    favorite: boolean,
    color: string
  } = {
    name: 'Default name',
    description: 'Default description',
    favorite: true,
    color: '#0000ff'
  };

  constructor() { }

  ngOnInit() {
  }

  isReadOnly(){
    return true;
  }
}
