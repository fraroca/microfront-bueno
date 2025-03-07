import { Component } from '@angular/core';
import { GestionPrincipalComponent } from '../components/ibi/gestion-principal/gestion-principal.component';
import { GenerarPadronComponent } from '../components/ibi/generar-padron/generar-padron.component';
import { EnlazarInmueblesComponent } from '../components/ibi/enlazar-inmuebles/enlazar-inmuebles.component';
import { Routes,RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ibi-gestion',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './ibi-gestion.component.html',
  styleUrl: './ibi-gestion.component.scss'
})
export class IbiGestionComponent {

}
