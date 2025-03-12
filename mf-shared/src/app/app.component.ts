import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DatosTasasComponent } from './datos-tasas/datos-tasas.component';
import { DatosGraphqlComponent } from './datos-graphql/datos-graphql.component';
import { DatosIaeComponent } from './datos-iae/datos-iae.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DatosTasasComponent,DatosGraphqlComponent,DatosIaeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-shared';
}
