import { Component } from '@angular/core';
import { PlayList } from './playlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpotApp';
  listPlaylists: PlayList[] = [
    { id: 1, name: 'Hity lat 80', description: 'Opis', favorite: true, color: '#ff0000'},
    { id: 2, name: 'Hity lat 70', description: 'Opis2', favorite: true, color: '#ffff00'},
    { id: 3, name: 'Hity lat 90', description: 'Opis3', favorite: true, color: '#00ff00'},
  ];
}
