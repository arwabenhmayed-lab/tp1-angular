import { Component, EventEmitter, Output } from '@angular/core';

export interface Cours {
  titre: string;
  categorie: string;
  duree: string;
  places: number;
}

@Component({
  selector: 'app-liste-cours',
  standalone: true,
  templateUrl: './liste-cours.html',
  styleUrl: './liste-cours.css'
})
export class ListeCoursComponent {
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;

  cours: Cours[] = [
    { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },
    { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15 },
    { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 },
    { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 }
  ]
  recherche = '';
tri: 'asc' | 'desc' = 'asc';
// ... coursActif, coursSelectionne, cours, selectionner() inchangés;

  selectionner(c: Cours): void {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}
