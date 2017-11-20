import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'component-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: ['.card-title { border-right: 10px solid transparent;}'],
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

  isInEditMode: boolean = false;

  constructor() {
    console.log(this);
  }

  ngOnInit() {
  }
}
