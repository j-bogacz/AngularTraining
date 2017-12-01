import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {SpotifyAccessorAuthenticationService} from '../error/spotify-accessor-authentication.service';
import {map} from "rxjs/operators";
import 'rxjs/add/operator/catch';

@Injectable()
export class SpotifyAccessorService {

  constructor(private httpClient: HttpClient, private spotifyAccessorAuthenticationService: SpotifyAccessorAuthenticationService) {
  }

  GetAlbums(query: string = '!()') {

    var token = this.spotifyAccessorAuthenticationService.GetToken();

    var headers = new HttpHeaders({'Authorization': 'Bearer ' + token});

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${query}&type=album`, {headers: headers})
      .pipe(
        map(data => {
          return data['albums']['items']
        })
      )
      .catch(err => {
        console.log(err);
        this.spotifyAccessorAuthenticationService.Authorize();
        return [];
      });
  }
}
