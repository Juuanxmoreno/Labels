import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-new-small-box',
  templateUrl: './new-small-box.component.html',
  styleUrls: ['./new-small-box.component.css']
})
export class NewSmallBoxComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      idCajaBlanca: ['', Validators.required],
      pesoCajaBlancaSinLentes: ['', Validators.required],
      pesoCajaBlancaConLentes: ['', Validators.required],
      pesoEspecificoLente: ['', Validators.required],
      medidasCajaBlanca: ['', Validators.required],
      modeloLente: ['', Validators.required],
      color: ['', Validators.required],
      cantidadLentes: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.myForm.valid) {
      const idCajaBlanca = this.myForm.get('idCajaBlanca')?.value;
      const pesoCajaBlancaSinLentes = this.myForm.get('pesoCajaBlancaSinLentes')?.value;
      const pesoCajaBlancaConLentes = this.myForm.get('pesoCajaBlancaConLentes')?.value;
      const pesoEspecificoLente = this.myForm.get('pesoEspecificoLente')?.value;
      const medidasCajaBlanca = this.myForm.get('medidasCajaBlanca')?.value;
      const modeloLente = this.myForm.get('modeloLente')?.value;
      const color = this.myForm.get('color')?.value;
      const cantidadLentes = this.myForm.get('cantidadLentes')?.value;

      const doc = new jsPDF();
      doc.text('ID Caja Blanca: ' + idCajaBlanca, 10, 10);
      doc.text('Peso de la caja blanca sin lentes: ' + pesoCajaBlancaSinLentes + ' gramos', 10, 20);
      doc.text('Peso de la caja blanca con lentes: ' + pesoCajaBlancaConLentes + ' gramos', 10, 30);
      doc.text('Peso específico del lente: ' + pesoEspecificoLente, 10, 40);
      doc.text('Medidas de la caja blanca: ' + medidasCajaBlanca, 10, 50);
      doc.text('Modelo del lente: ' + modeloLente, 10, 60);
      doc.text('Color: ' + color, 10, 70);
      doc.text('Cantidad de lentes: ' + cantidadLentes, 10, 80);

      doc.save(idCajaBlanca + '.pdf');

    }
  }
}