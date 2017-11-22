import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../../album";

@Component({
  selector: 'mk-grid-albums',
  templateUrl: './grid-albums.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class GridAlbumsComponent implements OnInit {

  @Input() albums: Album[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
