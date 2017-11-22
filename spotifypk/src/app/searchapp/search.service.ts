import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient, private auth: AuthService ) {

  }

  getAlbums(query = 'ACDC'){
    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${query}&type=album`,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth.getToken()
      })
    }).pipe(
       map(data => data['albums']['items'])
    ).catch(err => {
      console.log(err);
      this.auth.authorize();
      return [];
    });
  }
}