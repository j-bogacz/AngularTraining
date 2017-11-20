import { Component } from '@angular/core';
import { playList } from './play-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pawel_app';

  listPlayLists : playList[] = [
    {id: 1, name: "Hity lat 80tych", description: "Opis", favourite: false, color: "#ff0000", isEditingMode: false},
    {id: 2, name: "Hity lat 70tych", description: "Opis", favourite: false, color: "#ff0000", isEditingMode: false},
    {id: 3, name: "Hity lat 60tych", description: "Opis", favourite: false, color: "#ff0000", isEditingMode: false},
    {id: 4, name: "Hity lat 50tych", description: "Opis", favourite: false, color: "#ff0000", isEditingMode: false},
  ];
}
