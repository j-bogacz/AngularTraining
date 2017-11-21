import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../interfaces";

@Component({
  selector: 'lekarz-album-details',
  templateUrl: './album-details.component.html',
  styles: [`
    .card{
      width: 20rem;
      margin: 2%;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumDetailsComponent implements OnInit {
  @Input() album: Album;

  constructor() { }

  ngOnInit() {
  }

}
