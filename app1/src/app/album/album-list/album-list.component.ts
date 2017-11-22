import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Album } from '../interfaces';


@Component({
  selector: 'abc-album-list',
  templateUrl: './album-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumListComponent implements OnInit {

  @Input('listAlbum') listAlbum: Album[];

  constructor() { }

  ngOnInit() {
    console.log('a', this.listAlbum);
  }

}
