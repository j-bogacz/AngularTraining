import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pawel-detail-play-list',
  templateUrl: './detail-play-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlayListComponent implements OnInit {

  playList: {
    name: string,
    description: string,
    color: string,
    favourite: boolean
    isEditingMode: boolean
  } = {
    name: 'Pierwsza',
    description: 'Opis pierwsza',
    color: '#ff0000',
    favourite: true,
    isEditingMode: true
  };
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
