import { Movie, Movies } from './models'; // Importe les types de données Movie et Movies depuis le fichier models

import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'; // Importe les fonctions nécessaires de @ngrx/signals

// Définit l'interface de l'état des films
export interface MoviesState {
  items: Movies; // Un tableau d'objets Movie
  loading: boolean; // Un indicateur pour indiquer si les données sont en cours de chargement
}

// Définit l'état initial des films
export const initialMoviesState: MoviesState = {
  items: [], // Initialise la liste des films comme étant vide
  loading: false, // Initialise l'indicateur de chargement à false
};

// Crée un magasin de signaux pour gérer l'état des films
export const moviesStore = signalStore(
  { providedIn: 'root' }, // Indique que ce magasin est fourni au niveau racine de l'application
  withState(initialMoviesState), // Initialise le magasin avec l'état initial des films
  withMethods((store) => ({
    // Définit des méthodes pour modifier l'état des films
    addOne(item: Movie) {
      // Méthode pour ajouter un film
      const nextId = store.items().length + 1; // Calcule l'ID du prochain film en fonction de la longueur de la liste actuelle
      item.id = nextId; // Affecte l'ID calculé au film à ajouter

      patchState(store, { loading: true }); // Modifie l'état pour indiquer que les données sont en cours de chargement
      patchState(store, { items: [...store.items(), item] }); // Ajoute le nouveau film à la liste des films
      patchState(store, { loading: false }); // Modifie l'état pour indiquer que le chargement est terminé
    },
  }))
);
