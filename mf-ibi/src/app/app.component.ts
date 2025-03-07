import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IbiGestionComponent } from './ibi-gestion/ibi-gestion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,IbiGestionComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-ibi';
}
