import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { playList } from '../play-list';

@Component({
  selector: 'pawel-list-play-lists',
  templateUrl: './list-play-lists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlayListsComponent implements OnInit {

  selectedItem: playList;
  @Input()  listPlayLists: playList[];
  @Output() selectedChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onSelected(selectedElement){
    this.selectedChange.emit(selectedElement);
  }

}
