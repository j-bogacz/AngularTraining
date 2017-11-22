import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from "../interfaces";

@Component({
  selector: 'kuku-search-result',
  templateUrl: './search-result.component.html',
  styles: [`
    .card {
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchResultComponent implements OnInit {
  @Input() albums: Album[];
  selectedPicture: string = 'https://www.google.pl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

  constructor() {
  }

  ngOnInit() {
  }

  previewPicture(url: string) {
    this.selectedPicture = url;
  }

}
