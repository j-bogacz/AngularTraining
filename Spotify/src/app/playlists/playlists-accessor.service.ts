import {Injectable} from '@angular/core';
import {Playlist} from "./interfaces";

@Injectable()
export class PlaylistsAccessorService {

  constructor() {
  }

  GetPlaylists(): Playlist[] {
    return [
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
  }

  GetPlaylist(id: number): Playlist {
    return this.GetPlaylists().find(p => p.id === id);
  }
}
