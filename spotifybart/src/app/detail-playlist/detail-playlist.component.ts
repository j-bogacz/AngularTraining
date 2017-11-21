import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'bart-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [` 
    .card-title {
      border-right: 2px solid transparent;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  title: string = "Playlist details";
  test: number = 1;
  
  @Input() playlist: Playlist;


  constructor() {
    console.log(this);
  }

  ngOnInit() {
  }

  returnGreen() {
    return "green";
  }
}
