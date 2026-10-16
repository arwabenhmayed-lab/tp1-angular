# TP1 — Catalogue de cours et inscriptions

Projet Angular standalone réalisé selon les étapes du TP.

## Prérequis
- Node.js LTS compatible avec la version d'Angular installée
- npm
- Git (facultatif pour lancer le projet)

## Installation et lancement
Dans un terminal ouvert dans le dossier `catalogue-cours` :

```bash
npm install
npm start
```

Ouvrez ensuite l'adresse affichée par Angular CLI (généralement `http://localhost:4200`).

Pour vérifier la compilation : `npm run build`.

## Contenu
- `EnTeteComponent` : titre de l'application
- `ListeCoursComponent` : quatre cours statiques affichés avec la syntaxe `@for`
- `PiedPageComponent` : pied de page
- `App` : assemble les trois composants standalone

Aucune API ni formulaire n'est inclus, conformément au TP.
