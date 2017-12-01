import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../../interfaces";

@Component({
  selector: 'component-results',
  templateUrl: './results.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class ResultsComponent implements OnInit {

  @Input()
  albums: Album[];

  constructor() {
  }

  ngOnInit() {
  }

}
