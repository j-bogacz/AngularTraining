import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../../album";

@Component({
  selector: 'mk-grid-albums',
  templateUrl: './grid-albums.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class GridAlbumsComponent implements OnInit {

  albums: Album[] = [
    {id: 1, imgSrc: 'qwe', title: 'Title', artist: 'Singer'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
