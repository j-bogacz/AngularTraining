import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../../album";

@Component({
  selector: 'mk-detail-album',
  templateUrl: './detail-album.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailAlbumComponent implements OnInit {

  album: Album = {id: 1, imgSrc: 'qwe', title: 'Title', artist: 'Singer'};

  constructor() {
  }

  ngOnInit() {
  }

}
