import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../playlist";

@Component({
  selector: 'kuku-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: [`
    .card-title {
      border: 2px solid transparent;
      padding: 5px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistsComponent implements OnInit {

  title: string = 'Szczegóły listy';
  isEditMode: boolean = false;

  @Input() myPlaylist: Playlist;

  constructor() {
  }

  ngOnInit() {
  }


}
