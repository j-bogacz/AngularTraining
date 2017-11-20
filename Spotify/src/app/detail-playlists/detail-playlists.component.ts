import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../playlist";

@Component({
  selector: 'component-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: ['.card-title { border-right: 10px solid transparent;}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistsComponent implements OnInit {

  title: string = 'Playlist detail';

  @Input()
  playlist: Playlist;

  isInEditMode: boolean = false;

  constructor() {
    console.log(this);
  }

  ngOnInit() {
  }
}
