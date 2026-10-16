import { Pipe, PipeTransform } from '@angular/core';
interface Cours {titre: string;}
@Pipe({ name: 'filtreCours' })
export class FiltreCoursPipe implements PipeTransform {
transform(cours: Cours[], recherche: string): Cours[] {
if (!recherche) return cours;
const q = recherche.toLowerCase();
return cours.filter(c => c.titre.toLowerCase().includes(q));
}
}