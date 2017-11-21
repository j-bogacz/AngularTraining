import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpotifyService {

  constructor( private httpClient : HttpClient, private auth: AuthService ) {

  }


  getAlbums(query: string  = 'acdc'){

    return this.httpClient.get( `https:/api.spotify.com/v1/search?q=${query}&type=${'album'}`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth.getToken()
      })
    })
      .pipe(
        map(data => return data['albums']['items']
           )
      ).catch(err => {
        console.log(err);
        this.auth.authorize();
        return [];
    });
  }
}
