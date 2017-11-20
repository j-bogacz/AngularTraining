import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kuku-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: [`
    .card-title {
      border-right: 2px solid transparent;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistsComponent implements OnInit {

  title: string = 'Szczegóły listy';
  isEditMode: boolean = false;

  playlist: {
    name: string,
    description: string,
    favorite: boolean,
    color: string
  } = {
    name: 'Domyślna nazwa',
    description: 'Domyślny opis',
    favorite: true,
    color: '#ff0000'
  };

  constructor() {
    console.log(this.playlist);
  }

  ngOnInit() {
  }

}
