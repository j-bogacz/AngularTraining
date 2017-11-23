import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kuku-home',
  templateUrl: './home.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  testData: Date = new Date();
  t = [{a: 1, b: 2, c: {}, d: 'kuku'}, {a: 3, b: 4, c: {r: 2, t: 4}, d: 'tere fere'}];

  constructor() {
  }

  ngOnInit() {
  }

}
