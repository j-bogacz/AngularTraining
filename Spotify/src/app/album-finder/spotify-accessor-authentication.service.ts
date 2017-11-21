import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyAccessorAuthenticationService {

  tokenKey: string = 'spotifyAccessToken';

  constructor() {
  }

  Authorize() {
    let client_id = '3d3f48370ce1466e9e0acbc9d3d3e8c5'
    let response_type = 'token'
    let redirect_uri = 'http://localhost:4200'
    location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}`)

    localStorage.removeItem(this.tokenKey)
  }

  GetToken() {
    let token = JSON.parse(localStorage.getItem(this.tokenKey))

    if (!token) {
      let match = location.hash.match(/#access_token=(.*?)&/)
      token = match && match[1]
      location.hash = ''
    }

    if (!token) {
      this.Authorize()
    }
    localStorage.setItem(this.tokenKey, JSON.stringify(token))

    return token
  }
}
