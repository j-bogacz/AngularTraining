import {Component} from '@angular/core';
import {Playlist} from './playlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tere fere kuku';
  playlists: Playlist[] = [
    {id: 1, name: 'Hity lat 80tych', description: 'fajna lista z lat 80tych', favorite: false, color: '#00ff00'},
    {id: 2, name: 'Hity lat 70tych', description: 'fajna lista z lat 70tych', favorite: false, color: '#ff0000'},
    {id: 3, name: 'Hity lat 60tych', description: 'fajna lista z lat 60tych', favorite: true, color: '#0000ff'}
  ];
}
