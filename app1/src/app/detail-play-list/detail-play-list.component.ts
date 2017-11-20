import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'abc-detail-play-list',
  templateUrl: './detail-play-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlayListComponent implements OnInit {

  title: string = "Playlist details";
  test: number = 10;

  playList: {
    name: string,
    description: string,
    favorite: boolean,
    color: string
  } = {
    name: "pierwsza",
    description : "opis",
    favorite: true,
    color: '#0000ff'
  };

  constructor() { }

  ngOnInit() {
  }

}
