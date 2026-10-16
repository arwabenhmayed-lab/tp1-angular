import { Pipe, PipeTransform } from '@angular/core';

interface PlacesRestantes {titre: string;}
@Pipe({ name: 'PlacesRestantesPipe ' })
export class PlaceRestantesPipe implements PipeTransform {
	transform(c: { places: 4 }, seuil: number = 10): string {
		if (c.places === 0) return 'Complet';
		if (c.places === 1) return 'Dernière place !';
		if (c.places >= 2 && c.places <= seuil) return 'Plus de 3 places';
		if (c.places > seuil) return '8 places disponibles';
        return '';   
    }
}
export interface Cours {
  titre: string;
  categorie: string;
  duree: string;
  places: number;
  <!-- avant -->
Places disponibles : {{ c.places }}
 <!-- après -->
 {{ c.places | PlacesRestantesPipe }}</p>
}