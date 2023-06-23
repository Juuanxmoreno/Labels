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

  constructor(private cajaAmarillaService: CajaAmarillaService) { }

  ngOnInit() {
    this.obtenerCajasAmarillas();
  }

  obtenerCajasAmarillas() {
    this.cajaAmarillaService.obtenerCajasAmarillas()
      .subscribe(cajas => this.cajasAmarillas = cajas);
  }

  verDetalles(caja: CajaAmarilla) {
    caja.mostrarDetalles = !caja.mostrarDetalles;
  }


}
