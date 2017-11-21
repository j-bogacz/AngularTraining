import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../../playlist";

@Component({
  selector: 'kuku-search-result',
  templateUrl: './search-result.component.html',
  styles: [`
    .card {
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchResultComponent implements OnInit {
  foundPlaylists: Playlist[];

  constructor() {
    this.foundPlaylists = [
      {id: 1, description: 'super', favorite: false, name: 'wymyslone piosenki', color: 'blue'},
      {id: 2, description: 'super2', favorite: false, name: 'wymyslone piosenki2', color: 'red'}
    ];
  }

  ngOnInit() {
  }

}
