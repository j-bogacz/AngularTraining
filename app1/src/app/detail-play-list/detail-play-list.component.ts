import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {PlayList} from "../playlist";

@Component({
  selector: 'abc-detail-play-list',
  templateUrl: './detail-play-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlayListComponent implements OnInit {

  title: string = "Playlist details";
  test: number = 10;
  isEditMode: boolean = false;

  playList: {
    name: string,
    description: string,
    favorite: boolean,
    color: string
  } = {
    name: "pierwsza",
    description : "jakis bardzo dlugi opis, jakis bardzo dlugi opis, jakis bardzo dlugi opis, jakis bardzo dlugi opis, ",
    favorite: true,
    color: '#ffffff'
  };

  @Input() playlist: PlayList;

  constructor() {
    console.log(this.playList);
  }

  ngOnInit() {
  }

}