import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-ibi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos-ibi.component.html',
  styleUrl: './datos-ibi.component.scss'
})
export class DatosIbiComponent {

  ibiData = [
    {
      referenciaCatastral: '123456789',
      direccion: 'Calle Falsa 123',
      importe: 350.50,
      periodo: '2023'
    },
    {
      referenciaCatastral: '987654321',
      direccion: 'Avenida Real 456',
      importe: 420.75,
      periodo: '2023'
    },
    {
      referenciaCatastral: '456789123',
      direccion: 'Plaza Mayor 789',
      importe: 300.00,
      periodo: '2023'
    }
  ];
}
