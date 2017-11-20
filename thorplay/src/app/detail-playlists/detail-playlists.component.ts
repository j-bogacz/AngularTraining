import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kuku-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistsComponent implements OnInit {

  title: string = 'Szczegóły listy';

  playlist: {
    name: string,
    description: string,
    favorite: boolean,
    color: string
  } = {
    name: 'Domyślna nazwa',
    description: 'Domyślny opis',
    favorite: true,
    color: "#ff0000"
  }

  constructor() { }

  ngOnInit() {
  }

}
