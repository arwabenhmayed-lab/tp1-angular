import { Component } from '@angular/core';
import { EnTeteComponent } from '../composants/en-tete/en-tete';
import { ListeCoursComponent } from '../composants/liste-cours/liste-cours';
import { PiedPageComponent } from '../composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnTeteComponent, ListeCoursComponent, PiedPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
