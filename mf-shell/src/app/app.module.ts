import { HttpClientModule } from '@angular/common/http';
import { NgModule,inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideApollo } from 'apollo-angular';
import { provideHttpClient } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
 
      return {
        link: httpLink.create({ uri: 'https://rickandmortyapi.com/graphql' }),
        cache: new InMemoryCache(),
        // other options...
      };
    }),],
  bootstrap: [AppComponent],
})
export class AppModule {}
