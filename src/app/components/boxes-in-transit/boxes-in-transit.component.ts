import { Component, OnInit } from '@angular/core';
import { CajaAmarilla } from 'src/app/model/caja-amarilla';
import { CajaAmarillaService } from 'src/app/service/caja-amarilla.service';

@Component({
  selector: 'app-boxes-in-transit',
  templateUrl: './boxes-in-transit.component.html',
  styleUrls: ['./boxes-in-transit.component.css']
})
export class BoxesInTransitComponent implements OnInit {
  cajasAmarillas: CajaAmarilla[] = [];
  filtroTransporte: 'aereo' | 'maritimo' | 'todos' = 'todos';
  transporteSeleccionado: 'aereo' | 'maritimo' | null = null;

  constructor(private cajaAmarillaService: CajaAmarillaService) { }

  ngOnInit(): void {
    this.obtenerCajasAmarillas();
  }

  obtenerCajasAmarillas(): void {
    this.cajaAmarillaService.obtenerCajasAmarillas()
      .subscribe(cajas => {
        this.cajasAmarillas = cajas;
      });
  }

  toggleDetalles(caja: CajaAmarilla): void {
    caja.mostrarDetalles = !caja.mostrarDetalles;
  }

  obtenerTextoBoton(caja: CajaAmarilla): string {
    return caja.mostrarDetalles ? 'Ocultar' : 'Ver detalles';
  }

  filtrarCajas(transporte: 'aereo' | 'maritimo' | 'todos'): void {
    this.filtroTransporte = transporte as 'aereo' | 'maritimo';
    this.transporteSeleccionado = transporte as 'aereo' | 'maritimo';
  }
}
