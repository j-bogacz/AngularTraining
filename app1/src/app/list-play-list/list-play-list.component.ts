import {Component, OnInit, ViewEncapsulation} from '@angular/core';

interface PlayList {
  id: number,
  name: string,
  description: string,
  favorite: boolean,
  color: string
}

@Component({
  selector: 'abc-list-play-list',
  templateUrl: './list-play-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlayListComponent implements OnInit {

  selected: PlayList;

  listPlayLists: PlayList[] = [
    {id: 1, name: '100 Turbo Hits', description: 'Opis 1', favorite: false, color: '#435577'},
    {id: 2, name: '200 Turbo Hits', description: 'Opis 2', favorite: false, color: '#43ff77'},
    {id: 3, name: '300 Turbo Hits', description: 'Opis 3', favorite: false, color: '#ff5577'},
    {id: 4, name: '400 Turbo Hits', description: 'Opis 4', favorite: false, color: '#4355ff'}
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
