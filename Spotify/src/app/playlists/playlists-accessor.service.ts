import {EventEmitter, Injectable} from '@angular/core';
import {Playlist} from "./interfaces";


class PlaylistObject implements Playlist {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
  color: string;

  constructor(newObject: Playlist) {
    if (newObject && newObject.id) {
      this.id = newObject.id;
      this.name = newObject.name;
      this.description = newObject.description;
      this.favorite = newObject.favorite;
      this.color = newObject.color;
    }
  }
}

@Injectable()
export class PlaylistsAccessorService {

  constructor() {
  }

  private allPlaylists = [
    {
      id: 1,
      name: "Hity lat 90",
      description: "Opis listy hitow lat 80",
      favorite: true,
      color: "#ff0000"
    },
    {
      id: 2,
      name: "Hity lat 80",
      description: "Opis listy hitow lat 70",
      favorite: false,
      color: "#00ff00"
    },
    {
      id: 3,
      name: "Hity lat 70",
      description: "Opis listy hitow lat 70",
      favorite: false,
      color: "#0000ff"
    },
    {
      id: 4,
      name: "Hity lat 60",
      description: "Opis listy hitow lat 60",
      favorite: false,
      color: "#ff00ff"
    },
  ];

  playlistChanged = new EventEmitter<Playlist[]>();

  GetPlaylists(): Playlist[] {
    return this.allPlaylists.map(playlist => new PlaylistObject(playlist));
  }

  GetPlaylist(id: number): Playlist {
    var playlist = this.allPlaylists.find(p => p.id === id);
    if (playlist) {
      return new PlaylistObject(playlist);
    }
  }

  SetPlaylist(newPlaylist: Playlist) {
    this.allPlaylists = this.allPlaylists.map(playlist => playlist.id === newPlaylist.id ? newPlaylist : playlist);
    this.playlistChanged.emit(this.allPlaylists.map(playlist => new PlaylistObject(playlist)));
  }
}
