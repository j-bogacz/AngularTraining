import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
    this.getAlbums();
  }

  getAlbums(query: string = '41MnTivkwTO3UUJ8DrqEJJ') {
    this.httpClient.get(`https://api.spotify.com/v1/albums?ids=${query}`).subscribe(albums => {
      console.log(albums);
    });
  }

}
