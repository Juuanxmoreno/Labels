import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
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
      cajasBlancas: this.formBuilder.array([])
    });
  }

  ngOnInit() {
  }

  get cajasBlancasArray() {
    return this.myForm.get('cajasBlancas') as FormArray;
  }

  agregarCajaBlanca() {
    const cajaBlanca = this.formBuilder.group({
      idCajaBlanca: ['', Validators.required],
      pesoSinLentes: ['', Validators.required],
      pesoConLentes: ['', Validators.required],
      pesoEspecificoLente: ['', Validators.required],
      medidas: ['', Validators.required],
      modeloLente: ['', Validators.required],
      color: ['', Validators.required],
      cantidadLentes: ['', Validators.required]
    });
    this.cajasBlancasArray.push(cajaBlanca);
  }

  eliminarCajaBlanca(index: number) {
    this.cajasBlancasArray.removeAt(index);
  }

  submitForm() {
    if (this.myForm.valid) {
      const doc = new jsPDF('p', 'mm', 'a4'); // Ajustar el tamaño de página según tus necesidades
      const cajasBlancas = this.cajasBlancasArray.controls;
      let offsetY = 10;

      cajasBlancas.forEach((cajaBlanca: AbstractControl) => {
        const idCajaBlanca = cajaBlanca.get('idCajaBlanca')?.value;
        const pesoSinLentes = cajaBlanca.get('pesoSinLentes')?.value;
        const pesoConLentes = cajaBlanca.get('pesoConLentes')?.value;
        const pesoEspecificoLente = cajaBlanca.get('pesoEspecificoLente')?.value;
        const medidas = cajaBlanca.get('medidas')?.value;
        const modeloLente = cajaBlanca.get('modeloLente')?.value;
        const color = cajaBlanca.get('color')?.value;
        const cantidadLentes = cajaBlanca.get('cantidadLentes')?.value;

        doc.text('ID Caja Blanca: ' + idCajaBlanca, 10, offsetY);
        doc.text('Peso Caja Blanca sin Lentes: ' + pesoSinLentes + 'gramos', 10, offsetY + 10);
        doc.text('Peso Caja Blanca con Lentes: ' + pesoConLentes + 'gramos', 10, offsetY + 20);
        doc.text('Peso especifico del lente: ' + pesoEspecificoLente + 'gramos', 10, offsetY + 30);
        doc.text('Medidas Caja Blanca: ' + medidas, 10, offsetY + 40);
        doc.text('Modelo del lente: ' + modeloLente, 10, offsetY + 50);
        doc.text('Color: ' + color, 10, offsetY + 60);
        doc.text('Cantidad de lentes: ' + cantidadLentes, 10, offsetY + 70);

        offsetY += 90;

        if (offsetY >= doc.internal.pageSize.height - 20) {
          doc.addPage();
          offsetY = 10;
        }
      });

      doc.save('cajas_blancas.pdf');
    }
  }
}
