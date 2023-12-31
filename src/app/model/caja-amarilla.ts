import { CajaBlanca } from "./caja-blanca";

export class CajaAmarilla {
    nombreCajaAmarilla: string;
    alto: null;
    ancho: null;
    profundidad: null;
    peso: null;
    costo: null;
    transporteAereo: boolean;
    cajasBlancas: CajaBlanca[];

    mostrarDetalles: boolean; // Nueva propiedad para controlar la visualización de los detalles

    constructor(
        nombreCajaAmarilla: string,
        alto: null,
        ancho: null,
        profundidad: null,
        peso: null,
        costo: null,
        transporteAereo: boolean,
        cajasBlancas: CajaBlanca[]
    ) {
        this.nombreCajaAmarilla = nombreCajaAmarilla;
        this.alto = alto;
        this.ancho = ancho;
        this.profundidad = profundidad;
        this.peso = peso;
        this.costo = costo;
        this.transporteAereo = transporteAereo;
        this.cajasBlancas = cajasBlancas;

        this.mostrarDetalles = false; // Inicialmente ocultamos los detalles
    }
}
