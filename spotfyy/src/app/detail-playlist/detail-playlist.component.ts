import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {PlayList} from '../playlist';

@Component({
  selector: 'lekarz-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  title : string = 'Playlist detail';
  @Input() selected: PlayList;

  // playlist: {
  //   name: string,
  //   description: string,
  //   favorite: boolean,
  //   color: string
  // } = {
  //   name: 'Pierwsza',
  //   description: 'Opis pierwszej',
  //   favorite: false,
  //   color: '#ff0000'
  // }


  showHide : boolean = false;


  constructor() {
    console.log(this.selected);
  }

  ngOnInit() {
  }

}
