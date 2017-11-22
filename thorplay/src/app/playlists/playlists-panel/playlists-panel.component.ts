import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Playlist} from "../../playlist";
import {PlaylistService} from "../playlist.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'kuku-playlists-panel',
  templateUrl: './playlists-panel.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaylistsPanelComponent implements OnInit {
  title = 'Tere fere kuku';
  playlists: Playlist[];
  @Input() hasParam: boolean = false;

  constructor(private playlistService: PlaylistService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.playlists = this.playlistService.getAllPlaylists();
    console.log('start: ', this.hasParam);
  }

  ngOnInit() {
  }

  onAcvtivate(event) {
    console.log('activte:', event);
    this.hasParam = !isNaN(event.playlistId);
  }

}
