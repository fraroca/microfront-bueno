
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-tasas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos-tasas.component.html',
  styleUrl: './datos-tasas.component.scss'
})
export class DatosTasasComponent {
  // Datos de ejemplo de tasas municipales
  tasasData = [
    {
      codigo: 'TM001',
      concepto: 'Tasa de recogida de basuras',
      importe: 120,
      periodo: '2023',
    },
    {
      codigo: 'TM002',
      concepto: 'Tasa de alcantarillado',
      importe: 80,
      periodo: '2023',
    },
    {
      codigo: 'TM003',
      concepto: 'Tasa de licencia de apertura',
      importe: 300,
      periodo: '2023',
    },
    {
      codigo: 'TM004',
      concepto: 'Tasa de ocupación de vía pública',
      importe: 150,
      periodo: '2023',
    },
  ];
}
