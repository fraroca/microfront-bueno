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
   // you can load the remote module here instead of in webpack config
   /*const remoteReact = await loadRemoteModule({
    remoteEntry: 'http://localhost:4001/remoteEntry.js',
    remoteName: 'remote',
    exposedModule: './Header'
  });
    this.microfrontendComponent = remoteReact.Header;*/
    debugger;

    /*const l = await loadRemoteModule({
      remoteEntry: 'http://localhost:4210/remoteEntry.js',
      remoteName: 'remote',
      exposedModule: './Header',
    });*/
    const l = await loadRemoteModule({
      remoteName: 'remote',
      remoteEntry: 'http://localhost:4210/remoteEntry.js',
      exposedModule: './Header',
    });
    debugger;
    this.microfrontendComponent = l.default;

    // Renderiza el componente React en el contenedor
    /*const container = document.getElementById('headerContainer');
    if (container) {
      ReactDOM.render(React.createElement(this.microfrontendComponent), container);
    }*/
  }

  handleEventoPersonalizado(evento: string) {
    alert('Evento recibido:'+ evento);
  }
}
