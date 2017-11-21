import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  authorize(){
    let client_id = '025f836fd84a426ab6735e9ee5cb381a';
    let response_type = 'token';
    let redirect_uri = 'http://localhost:4201';
    location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}`)

    localStorage.removeItem('token');
  }


  getToken(){
    let token = JSON.parse(localStorage.getItem('token'));

    if(!token){
      let match = location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
      location.hash = '';
    }

    if(!token){
      this.authorize();
    }
    localStorage.setItem('token',JSON.stringify(token));

    return token;
  }

}