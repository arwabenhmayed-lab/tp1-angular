# TP2 — Liste et détail d'un cours

Projet Angular standalone basé sur le squelette du TP1. Le clic sur une carte de cours transmet la sélection au composant racine avec `@Output` / `EventEmitter`, puis le composant racine passe le cours au détail avec `@Input`.

## Prérequis
- Node.js LTS compatible avec Angular 22
- npm
- Git (facultatif pour lancer le projet)

## Installation et lancement
Dans un terminal ouvert dans le dossier `catalogue-cours` :

```bash
npm install
npm start
```

Ouvrez l'adresse affichée par Angular CLI (généralement `http://localhost:4200`). Pour vérifier la compilation :

```bash
npm run build
```

## Fonctionnalités TP2
- Interface `Cours` réutilisée dans les composants concernés
- Liste de quatre cours avec la syntaxe `@for`
- Sélection par clic et mise en évidence avec `[class.actif]`
- Communication liste → racine via `@Output()` et `EventEmitter<Cours>`
- Communication racine → détail via `@Input()`
- Message d'attente via `@if` / `@else`

## Historique Git
- `Initial commit : squelette Angular 22`
- `TP1 : composants en-tete, liste-cours et pied-page`
- `TP2 : liste et détail d'un cours (data binding, Input/Output)`
