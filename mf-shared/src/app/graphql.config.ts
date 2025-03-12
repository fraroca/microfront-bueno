// src/app/graphql.config.ts

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
    providers: [
      importProvidersFrom(HttpClientModule),
      {
        provide: ApolloClient,
        useFactory: () => {
          return new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
              uri: 'https://api.spacex.land/graphql/', // Usa tu endpoint GraphQL
            }),
          });
        },
      },
    ],
  };