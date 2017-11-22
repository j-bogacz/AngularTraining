import {Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lekarz-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBoxComponent implements OnInit {

  keyWord: string = '';
  @Output() keyWordChange = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.keyWordChange.emit(this.keyWord);
  }

}
