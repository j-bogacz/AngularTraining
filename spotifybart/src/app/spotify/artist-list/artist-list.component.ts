import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Album } from "../interfaces";

@Component({
  selector: 'bart-artist-list',
  templateUrl: './artist-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ArtistListComponent implements OnInit {

  @Input() albums: Album[];

  constructor() { }

  ngOnInit() {
  }

}
