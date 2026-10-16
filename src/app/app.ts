import { Component } from '@angular/core';
import { EnTeteComponent } from '../composants/en-tete/en-tete';
import { ListeCoursComponent, Cours } from '../composants/liste-cours/liste-cours';
import { DetailCoursComponent } from '../composants/detail-cours/detail-cours';
import { PiedPageComponent } from '../composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnTeteComponent, ListeCoursComponent, DetailCoursComponent, PiedPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  coursSelectionne: Cours | null = null;

  onSelectionCours(c: Cours): void {
    this.coursSelectionne = c;
  }
}
