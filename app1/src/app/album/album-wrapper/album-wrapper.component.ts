import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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

  @Input('searchText') searchText: string;


  constructor(private spotifyService: SpotifyService) {
   this.search('acdc');
  }

  search(text: string){
    this.spotifyService.getAlbums(text)
      .subscribe( albums => {
        this.albums = albums as Album[];
        console.log('albums', this.albums);
      });

  }

  ngOnInit() {
  }

}
