import { ApplicationConfig } from '@angular/core';
//import { ɵprovideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  //https://riegler.fr/blog/2024-01-11-zoneless-preview

  providers: [
    //  ɵprovideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
  ],
};
