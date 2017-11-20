import { Component } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotify Premium';

  listPlaylists: Playlist[] = [
    {id: 1, name: 'Chill', description: 'Chill music for the weekend', favourite: true, color: '#00BCD4'},
    {id: 2, name: 'Relax', description: 'Relax music for the weekend', favourite: false, color: '#11BCD4'},
    {id: 3, name: 'Jazz', description: 'Jazz music for the weekend', favourite: false, color: '#22BCD4'}
  ];

}
