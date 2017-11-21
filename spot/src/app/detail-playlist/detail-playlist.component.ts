import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from '../playlist';

@Component({
  selector: 'mk-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [`
    .card-body {
      padding: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  @Input() playlist: Playlist;
  editMode: boolean = false;

  constructor() {
    console.log(this.playlist);
  }

  ngOnInit() {
  }

}
