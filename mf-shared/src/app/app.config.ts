import { ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de importar tus rutas
import { HttpClientModule } from '@angular/common/http';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { provideApollo, provideNamedApollo } from 'apollo-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configuración de rutas
    provideHttpClient(),
    provideNamedApollo(() => {
      const httpLink = inject(HttpLink);
 
      return {
        default: {
          link: httpLink.create({ uri: 'https://rickandmortyapi.com/graphql' }),
          cache: new InMemoryCache(),
          // other options...
        },
        recaudacion: {
          link: httpLink.create({
            uri: 'http://localhost:8000/graphql/',
          }),
          cache: new InMemoryCache(),
        },
      };
    }),
  ],
};
