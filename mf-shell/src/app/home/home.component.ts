import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  microfrontendComponent: any;
  datosIaeShared : any;
  datosTasasShared : any;

  constructor(private cdr: ChangeDetectorRef, private appRef: ApplicationRef) {}
  async ngOnInit() {
    this.renderBarChart();
    /*this.microfrontendComponent = loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4206/remoteEntry.js',
      exposedModule: './SharedComponent',
    }).then(i => i.AppComponent);*/

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4206/remoteEntry.js',
      exposedModule: './DatosIaeSharedComponent',
    });
    this.datosIaeShared = m.DatosIaeComponent;

    const l = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4206/remoteEntry.js',
      exposedModule: './DatosTasasSharedComponent',
    });
    this.datosTasasShared = l.DatosTasasComponent;
  }

  async loadMicrofrontend1() {

    /*const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4206/remoteEntry.js',
      exposedModule: './SharedComponent',
    });
    this.microfrontendComponent = m.AppComponent;*/
  }

  renderBarChart(): void {
    Chart.register(...registerables);

    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
          {
            label: 'IBI',
            data: [100, 120, 130, 140, 150, 160],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'IAE',
            data: [70, 80, 90, 100, 110, 120],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'IVTM',
            data: [50, 60, 70, 80, 90, 100],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
