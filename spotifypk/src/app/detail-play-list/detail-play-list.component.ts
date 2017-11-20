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
    visibility: string
  } = {
    name: 'Pierwsza',
    description: 'Opis pierwsza',
    color: '#ff0000',
    favourite: true,
    visibility: "hidden"
  };
  constructor() {
    console.log(this.playList);
  }
  ngOnInit() {
  }

  getVisibility(){
    if(this.playList.visibility == "hidden")
    {
      this.playList.visibility = "visible";
    }
    else if(this.playList.visibility == "visible")
    {
      this.playList.visibility = "hidden";
    }
  }

}
