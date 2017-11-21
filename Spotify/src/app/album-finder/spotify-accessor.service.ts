import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SpotifyAccessorService {

  constructor(private httpClient: HttpClient) {
  }

  GetAlbums(query: string = 'acdc') {
    this.httpClient.get(`https://api.spotify.com/v1/search?q=$(query)`)
      .subscribe(albums => {
        console.log('Albums found:', albums);
      })
  }
}
