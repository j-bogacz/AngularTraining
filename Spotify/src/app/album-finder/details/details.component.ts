import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../interfaces";

@Component({
  selector: 'component-details',
  templateUrl: './details.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailsComponent implements OnInit {

  @Input()
  album: Album;

  constructor() {
  }

  ngOnInit() {
  }

}
