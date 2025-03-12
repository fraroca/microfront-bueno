import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta por defecto, carga HomeComponent
  /*{
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductsModule',
      }).then((m) => m.ProductsModule),
  },
  {
    path: 'payment',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './PaymentComponent',
      }).then((m) => m.PaymentComponent),
  },
  {
    path: 'ibi',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './IbiGestionComponent',
      }).then((m) => m.IbiGestionComponent),
  },
  {
    path: 'ibi',
    loadChildren: () => import('mfibi/IBIRoutes').then((m) => m.IBI_ROUTES),
  },*/
  {
    path: 'ibi',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './IBIRoutes',
      }).then(m => m.IBI_ROUTES)
  },
  /*{
    path: 'ivtm',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        exposedModule: './Header',
      }).then(m => m.Header)
  },*/

  {
    path: 'ivtm',
    loadComponent: () =>

      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4001/remoteEntry.js',
        exposedModule: './Header',
      }).then(m => m.Header)
  },
  {
    path: 'geotributos',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: './GeotributosComponent',
      }).then(m => m.AppComponent)
  },
  {
    path: 'consulta_graphql',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4206/remoteEntry.js',
        exposedModule: './DatosGraphQlSharedComponent',
      }).then(m => m.DatosGraphqlComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
