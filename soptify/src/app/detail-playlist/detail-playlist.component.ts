import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../playlist";

@Component({
  selector: 'butelka-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistComponent implements OnInit {

  isEdit:boolean = false;


  constructor() {
    console.log(this);
  }

  ngOnInit() {
  }

  title:string = "Playlist detail";

  @Input() playlist: Playlist[];

  edit(){
    this.isEdit = !this.isEdit;
  }

}
