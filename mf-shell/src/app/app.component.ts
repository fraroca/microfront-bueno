import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

interface ICommonProduct {
  price: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  outputs: any = {};
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  dynamicContainer!: ViewContainerRef;
  constructor() {
    // Configurar el manejador del evento
    this.outputs = {
      eventoPersonalizado: (evento: string) => this.handleEventoPersonalizado(evento),
    };
  }
  count = 0;
  private _products: ICommonProduct[] = [];
  microfrontendComponent: any;
  inputs: any = {};  // Objeto para pasar inputs
  componentRef = null;

  ngOnInit(): void {
    
  }

  isSubMenuOpen = false;

  toggleSubMenu(event: Event): void {
    event.preventDefault(); // Evita la navegación predeterminada
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  async loadMicrofrontend1() {
    /*this.dynamicContainer.clear();
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './PaymentComponent',
    });
    this.microfrontendComponent = m.PaymentComponent;
    this.componentRef= this.dynamicContainer.createComponent(this.microfrontendComponent);
    this.componentRef.instance.saludo = 'Jesús';

    // Suscribirse al evento emitido por el componente dinámico
    this.componentRef.instance.eventoPersonalizado.subscribe((e) => {
      
    });*/

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './IbiGestionComponent',
    });
    this.microfrontendComponent = m.IbiGestionComponent;

  }

  handleEventoPersonalizado(evento: string) {
    alert('Evento recibido:'+ evento);
  }
}
