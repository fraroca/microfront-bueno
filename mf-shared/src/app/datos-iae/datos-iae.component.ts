import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-iae',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos-iae.component.html',
  styleUrl: './datos-iae.component.scss'
})
export class DatosIaeComponent {
  // Datos de ejemplo del IAE
  iaeData = [
    {
      codigo: '001',
      actividad: 'Comercio al por menor',
      baseImponible: 15000,
      cuota: 300,
    },
    {
      codigo: '002',
      actividad: 'Restaurantes',
      baseImponible: 25000,
      cuota: 500,
    },
    {
      codigo: '003',
      actividad: 'Transporte de mercancías',
      baseImponible: 40000,
      cuota: 800,
    },
    {
      codigo: '004',
      actividad: 'Servicios de consultoría',
      baseImponible: 30000,
      cuota: 600,
    },
  ];
}
