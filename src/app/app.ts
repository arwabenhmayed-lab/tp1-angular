import { Component } from '@angular/core';
import { EnTete } from '../composants/en-tete/en-tete';
import { ListeCoursComponent } from '../composants/liste-cours/liste-cours';
import { PiedPage } from '../composants/pied-page/pied-page';

@Component({  
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [
     EnTete,
     ListeCoursComponent,
     PiedPage
  ],
})
export class App {
}
