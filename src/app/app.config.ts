import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),provideRouter(routes), 
    provideClientHydration(),provideHttpClient(),provideAuth0({
      domain: 'dev-sorjq8zi6vttvn3p.us.auth0.com',
      clientId: 'eJRIOp6ehatvt8K6uiY5QPyZ3PWBkYPp',
      authorizationParams: {
        redirect_uri: 'https://p49-preview.runhosting.com/coparodamiento.mypressonline.com/'
      }
    }),
  ]
};
