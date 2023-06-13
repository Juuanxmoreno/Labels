import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-big-box',
  templateUrl: './form-big-box.component.html',
  styleUrls: ['./form-big-box.component.css']
})
export class FormBigBoxComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
      idCajaAmarilla: ['', Validators.required],
      medidas: ['', Validators.required],
      pesoCajaVacia: ['', Validators.required],
      pesoCajaLlena: ['', Validators.required],
      cantidadCajasBlancas: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.myForm.valid) {
      const idCajaAmarilla = this.myForm.get('idCajaAmarilla')?.value;
      const medidas = this.myForm.get('medidas')?.value;
      const pesoCajaVacia = this.myForm.get('pesoCajaVacia')?.value;
      const pesoCajaLlena = this.myForm.get('pesoCajaLlena')?.value;
      const cantidadCajasBlancas = this.myForm.get('cantidadCajasBlancas')?.value;

      const doc = new jsPDF();
      doc.text('ID Caja Amarilla: ' + idCajaAmarilla, 10, 10);
      doc.text('Medidas: ' + medidas, 10, 20);
      doc.text('Peso de la caja vacía: ' + pesoCajaVacia + ' gramos', 10, 30);
      doc.text('Peso de la caja llena: ' + pesoCajaLlena + ' gramos', 10, 40);
      doc.text('Cantidad de cajas blancas: ' + cantidadCajasBlancas, 10, 50);

      doc.save(idCajaAmarilla + '.pdf');

      this.router.navigate(['/formSmallBox']);
    }
  }
}
