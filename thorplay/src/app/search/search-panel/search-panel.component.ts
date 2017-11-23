import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Album} from "../interfaces";
import {SpotifyMockService} from "../spotify-mock.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'kuku-search-panel',
  templateUrl: './search-panel.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchPanelComponent implements OnInit {
  albums: Album[];
  albums$: Observable<Album[]>;

  constructor(private spotifyService: SpotifyService, private spotifyMockService: SpotifyMockService) {
  }

  ngOnInit() {
  }

  findAlbums(text: string) {
    this.albums$ = this.spotifyService.getAlbums(text);

    // this.spotifyService.getAlbums(text).subscribe((albums: Album[]) => {
    //   this.albums = albums;
    //   console.log(this.albums);
    // });

    // this.albums = this.spotifyMockService.getAlbums(text);
  }

}
