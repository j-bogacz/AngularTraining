import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { playList } from '../play-list';

@Component({
  selector: 'pawel-detail-play-list',
  templateUrl: './detail-play-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlayListComponent implements OnInit {

  @Input()  playList: playList;
  constructor() {
    console.log(this.playList);
  }
  ngOnInit() {
  }

  getVisibility(){
    if(this.playList.isEditingMode)
    {
      this.playList.isEditingMode = false;
    }
    else
    {
      this.playList.isEditingMode = true;
    }
  }

}
