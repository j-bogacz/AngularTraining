import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../playlist";


@Component({
  selector: 'butelka-list-playlist',
  templateUrl: './list-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selected : Playlist;
  @Input() listPlaylist: Playlist[];

  @Output() selectedChanged = new EventEmitter();


  onSelected(p){
    this.selectedChanged.emit(p);
    this.selected = p;
  }

}
