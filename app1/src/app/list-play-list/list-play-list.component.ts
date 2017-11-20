import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { PlayList } from '../playlist';

@Component({
  selector: 'abc-list-play-list',
  templateUrl: './list-play-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlayListComponent implements OnInit {

  selected: PlayList;
  @Input() listPlayList: PlayList[];
  @Output() selectedChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(playList){
    this.selectedChange.emit(playList);
    this.selected = playList;
  }
}
