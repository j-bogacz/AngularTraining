import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from '../../album';

@Component({
  selector: 'mk-detail-album',
  templateUrl: './detail-album.component.html',
  styles: [`
    .card {
      margin: 10px;
      margin-left: 0;
    }
    .card-body {
      padding: 20px;
      max-width: 300px;
      text-emphasis: dot;
    }
    .card-img-top {
      max-width: 300px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailAlbumComponent implements OnInit {

  @Input() album: Album;

  constructor() {
  }

  ngOnInit() {
  }

}
