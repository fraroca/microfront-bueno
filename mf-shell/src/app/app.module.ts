import { HttpClientModule } from '@angular/common/http';
import { NgModule,inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideApollo, provideNamedApollo } from 'apollo-angular';
import { provideHttpClient } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
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
            uri: 'https://localhost:8000/graphql',
          }),
          cache: new InMemoryCache(),
        },
      };
    }),],
  bootstrap: [AppComponent],
})
export class AppModule {}
