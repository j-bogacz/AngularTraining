import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lekarz-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponent implements OnInit {

  query: string = 'jaja';
  constructor() { }

  ngOnInit() {
  }

}
