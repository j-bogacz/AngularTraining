import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface playList {
  id: number;
  name: string;
  description?: string;
  favourite: boolean;
  color: string;
}

@Component({
  selector: 'pawel-list-play-lists',
  templateUrl: './list-play-lists.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPlayListsComponent implements OnInit {

  selectedItem: playList,

  listPlayLists : playList[] = [
    {id: 1, name: "Hity lat 80tych", description: "Opis", favourite: false, color: "#ff0000"},
    {id: 2, name: "Hity lat 70tych", description: "Opis", favourite: false, color: "#ff0000"},
    {id: 3, name: "Hity lat 60tych", description: "Opis", favourite: false, color: "#ff0000"},
    {id: 4, name: "Hity lat 50tych", description: "Opis", favourite: false, color: "#ff0000"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
