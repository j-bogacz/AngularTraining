import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { SpotifyMockService} from '../spotify-mock.service';
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


  constructor(
      private spotifyService: SpotifyService,
      private spotifyMockService: SpotifyMockService) {
   this.search('acdc');
  }

  search(query: string){
    this.spotifyService.getAlbums(query)
      .subscribe( albums => {
        this.albums = albums as Album[];
        console.log('albums', this.albums);
     });
    //console.log(query);
    //this.albums = this.spotifyMockService.getAlbums()['albums']['items'];
  }

  ngOnInit() {
  }

}
