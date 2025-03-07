import { Routes } from '@angular/router';
import { GestionPrincipalComponent } from './components/ibi/gestion-principal/gestion-principal.component';
import { GenerarPadronComponent } from './components/ibi/generar-padron/generar-padron.component';
import { EnlazarInmueblesComponent } from './components/ibi/enlazar-inmuebles/enlazar-inmuebles.component';

export const IBI_ROUTES: Routes = [
    { path: 'gestion-principal', component: GestionPrincipalComponent },
    { path: 'generar-padron', component: GenerarPadronComponent },
    { path: 'enlazar-inmuebles', component: EnlazarInmueblesComponent },
    { path: '', redirectTo: 'gestion-principal', pathMatch: 'full' }, // Ruta por defecto
  ];
