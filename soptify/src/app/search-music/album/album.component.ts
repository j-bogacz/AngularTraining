import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../interfaces";

@Component({
  selector: 'lekarz-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumComponent implements OnInit {


  @Input()
  albums: Album;

  constructor() { }

  ngOnInit() {
  }

}
