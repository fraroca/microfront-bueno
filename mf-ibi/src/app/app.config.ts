import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { IBI_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(IBI_ROUTES)]
};
