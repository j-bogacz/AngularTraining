import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../interfaces";

@Component({
  selector: 'kuku-search-panel',
  templateUrl: './search-panel.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchPanelComponent implements OnInit {
  albums: Album[];


  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  findAlbums(text: string) {
    this.spotifyService.getAlbums(text).subscribe((albums: Album[]) => {
      this.albums = albums;
      console.log(this.albums);
    });
  }

}
