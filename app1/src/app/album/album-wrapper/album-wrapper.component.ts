import { Component, OnInit, ViewEncapsulation, Output } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Album } from '../interfaces';

@Component({
  selector: 'abc-album-wrapper',
  templateUrl: './album-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AlbumWrapperComponent implements OnInit {
  albums: Album[];

  constructor(private spotifyService: SpotifyService) {
   this.spotifyService.getAlbums('Music')
     .subscribe( albums => {
       this.albums = albums as Album[];
        console.log('albums', this.albums);
     });

  }

  ngOnInit() {
  }

}
