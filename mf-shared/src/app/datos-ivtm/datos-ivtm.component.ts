import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-ivtm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos-ivtm.component.html',
  styleUrl: './datos-ivtm.component.scss'
})
export class DatosIvtmComponent {
  ivtmData: any[] = [
    {
      matricula: '1234ABC',
      marcaModelo: 'Toyota Corolla',
      importe: 120.50,
      periodo: '2023'
    },
    {
      matricula: '5678DEF',
      marcaModelo: 'Ford Focus',
      importe: 95.75,
      periodo: '2023'
    },
    {
      matricula: '9101GHI',
      marcaModelo: 'Volkswagen Golf',
      importe: 110.00,
      periodo: '2023'
    }
  ];
}
