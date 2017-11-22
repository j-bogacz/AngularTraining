import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Album} from '../../album';

@Component({
  selector: 'mk-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailAlbumComponent implements OnInit {

  @Input() album: Album;

  constructor() {
  }

  ngOnInit() {
  }

}
