import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'component-test',
  templateUrl: './test.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponent implements OnInit {

  query: string = 'babcia';

  constructor() {
  }

  ngOnInit() {
  }

}
