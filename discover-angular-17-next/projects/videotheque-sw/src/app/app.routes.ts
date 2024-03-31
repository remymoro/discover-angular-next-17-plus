import { Routes } from '@angular/router';
import { movieRoutes } from './features/movies/movies.routes';

export const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      import('./features/movies/movies.routes').then((item) => movieRoutes),
  },
];
