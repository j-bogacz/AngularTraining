import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../interfaces";
import {ActivatedRoute} from "@angular/router";
import {PlaylistsAccessorService} from "../playlists-accessor.service";

@Component({
  selector: 'component-detail-playlists',
  templateUrl: './detail-playlists.component.html',
  styles: ['.card-title { border-right: 10px solid transparent;}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailPlaylistsComponent implements OnInit {

  title: string = 'Playlist detail';

  playlist: Playlist;

  playlistId: number;

  isInEditMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private playlistsAccessorService: PlaylistsAccessorService) {
    this.playlistId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.playlist = this.playlistsAccessorService.GetPlaylist(this.playlistId);
  }

  ngOnInit() {
  }
}
