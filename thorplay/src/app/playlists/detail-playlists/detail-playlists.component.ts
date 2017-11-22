import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
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

  @Input() myPlaylist: Playlist;

  constructor(private activatedRoute: ActivatedRoute, private  playlistService: PlaylistService) {
    this.playlistId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.myPlaylist = this.playlistService.getPlaylistsById(this.playlistId);
  }

  ngOnInit() {
  }


}
