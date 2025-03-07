import { Component } from '@angular/core';
import * as L from 'leaflet';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {
  map: any;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    // Coordenadas de Écija
    //const ecijaCoords: L.LatLngExpression = [37.5411, -5.0827];

    // Inicializar el mapa
    /*this.map = L.map('map').setView(ecijaCoords, 13);

    // Añadir capa de tiles (puedes usar otros proveedores de mapas)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);*/

    // Añadir marcadores
    /*const marker1 = L.marker([37.5411, -5.0827]).addTo(this.map)
      .bindPopup('Punto 1 en Écija');

    const marker2 = L.marker([37.5380, -5.0800]).addTo(this.map)
      .bindPopup('Punto 2 en Écija');

    const marker3 = L.marker([37.5440, -5.0850]).addTo(this.map)
      .bindPopup('Punto 3 en Écija');*/

      // Coordenadas de Écija (Sevilla) en grados decimales
    const ecijaCoords = fromLonLat([-5.0827, 37.5411]);

    // Crear el mapa
    this.map = new Map({
      target: 'map', // ID del contenedor del mapa
      layers: [
        new TileLayer({
          source: new OSM() // Capa de OpenStreetMap
        })
      ],
      view: new View({
        center: ecijaCoords, // Centrar el mapa en Écija
        zoom: 13 // Nivel de zoom
      })
    });
  }
}
