import { Component } from '@angular/core';
import { EnTete } from '../composants/en-tete/en-tete';
import { ListeCoursComponent } from '../composants/liste-cours/liste-cours';
import { PiedPage } from '../composants/pied-page/pied-page';
import { DetailCoursComponent } from '../composants/detail-cours/detail-cours';
import { Cours } from '../composants/liste-cours/liste-cours';

@Component({  
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [
    EnTete,
    ListeCoursComponent,
    DetailCoursComponent,
    PiedPage
],
})
export class App {
  coursSelectionne: Cours | null = null;
  
  onSelectionCours(c: Cours) {

  this.coursSelectionne = c;

}
}
