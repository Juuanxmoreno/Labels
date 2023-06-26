import { Component } from '@angular/core';
import { CajaAmarilla } from '../model/caja-amarilla';
import { CajaBlanca } from '../model/caja-blanca';
import { CajaAmarillaService } from '../service/caja-amarilla.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  cajaAmarilla: CajaAmarilla = new CajaAmarilla("", null, null, null, null, null, true, []);
  cajasBlancas: CajaBlanca[] = [];

  constructor(private cajaAmarillaService: CajaAmarillaService, private router: Router) { }

  agregarCajaBlanca() {
    // Contraer la caja blanca anterior
    const cajaAnterior = this.cajasBlancas[this.cajasBlancas.length - 1];
    if (cajaAnterior) {
      cajaAnterior.contraido = true;
    }

    // Agregar una nueva caja blanca
    this.cajasBlancas.push(new CajaBlanca("", null, null, null, null, null, "", null, "", null));
  }


  submit(): void {
    if (this.cajasBlancas.length > 0) {
      this.cajaAmarilla.cajasBlancas = this.cajasBlancas;
      this.cajaAmarillaService.crearCajaAmarilla(this.cajaAmarilla).subscribe(
        response => {
          // Se ha guardado la caja amarilla con las cajas blancas asociadas
          // Realizar cualquier acción adicional después de guardar
          this.router.navigate(['']);
        },
        error => {
          // Manejar el error o mostrar algún mensaje de error
        }
      );
    } else {
      // No hay cajas blancas asociadas, mostrar un mensaje de error o realizar alguna otra acción apropiada
    }
  }

  toggleDetalle(cajaBlanca: CajaBlanca) {
    cajaBlanca.contraido = !cajaBlanca.contraido;
  }

}