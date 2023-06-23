export class CajaBlanca {
    nombreCajaBlanca: string;
    pesoCajaBlanca: number;
    altoCajaBlanca: number;
    anchoCajaBlanca: number;
    profundidadCajaBlanca: number;
    modeloLente: string;
    pesoLente: number;
    colorLente: string;
    cantidadLentes: number;

    constructor(
        nombreCajaBlanca: string,
        pesoCajaBlanca: number,
        altoCajaBlanca: number,
        anchoCajaBlanca: number,
        profundidadCajaBlanca: number,
        modeloLente: string,
        pesoLente: number,
        colorLente: string,
        cantidadLentes: number
    ) {
        this.nombreCajaBlanca = nombreCajaBlanca;
        this.pesoCajaBlanca = pesoCajaBlanca;
        this.altoCajaBlanca = altoCajaBlanca;
        this.anchoCajaBlanca = anchoCajaBlanca;
        this.profundidadCajaBlanca = profundidadCajaBlanca;
        this.modeloLente = modeloLente;
        this.pesoLente = pesoLente;
        this.colorLente = colorLente;
        this.cantidadLentes = cantidadLentes;
    }
}
