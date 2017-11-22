import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchService } from '../search.service';
import { SpotifyMockService } from '../spotify-mock.service';
import {Album} from '../interfaces';

@Component({
  selector: 'lekarz-search-wrapper',
  templateUrl: './search-wrapper.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchWrapperComponent implements OnInit {

   albums: Album[];
  constructor(private searchSvc: SearchService) {
  }

  ngOnInit() {
  }

  getSearchResults(query: string) {
    this.searchSvc.getAlbums(query).subscribe(albums =>{
      this.albums = albums as Album[];
    });
    //console.log('doSearchResults() executed');
    //this.albums = this.searchSvc.getAlbums()['albums']['items'] as Album[];
  }
}