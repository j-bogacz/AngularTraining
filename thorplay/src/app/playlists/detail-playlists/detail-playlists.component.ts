import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../../playlist";
import {ActivatedRoute} from "@angular/router";
import {PlaylistService} from "../playlist.service";

@Component({
  selector: 'kuku-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: [`
    .card-title {
      border: 2px solid transparent;
      padding: 5px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistsComponent implements OnInit {

  title: string = 'Szczegóły listy';
  isEditMode: boolean = false;
  playlistId: number = 0;

  @Output() onPlaylistIdChange = new EventEmitter<number>();

  @Input() myPlaylist: Playlist;

  constructor(private activatedRoute: ActivatedRoute, private  playlistService: PlaylistService) {
    activatedRoute.params.subscribe(params => {
      this.playlistId = parseInt(params['id'], 10);
      const tmp: Playlist = this.playlistService.getPlaylistsById(this.playlistId);
      if (tmp) {
        this.myPlaylist = {
          id: tmp.id,
          description: tmp.description,
          name: tmp.name,
          favorite: tmp.favorite,
          color: tmp.color
        };
      } else {
        this.myPlaylist = null;
      }
      this.onPlaylistIdChange.emit(this.playlistId);
    });
  }

  ngOnInit() {
  }

  savePlaylist(playlist: Playlist) {
    this.playlistService.savePlaylist(playlist);
  }
}
