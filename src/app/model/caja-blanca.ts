export class CajaBlanca {
    nombreCajaBlanca: string;
    pesoCajaBlancaVacia: number | null;
    pesoCajaBlanca: number | null;
    altoCajaBlanca: number | null;
    anchoCajaBlanca: number | null;
    profundidadCajaBlanca: number | null;
    modeloLente: string;
    pesoLente: number | null;
    colorLente: string;
    cantidadLentes: number | null;
    contraido: boolean; // Nueva propiedad agregada
  
    constructor(
        nombreCajaBlanca: string,
        pesoCajaBlancaVacia: number | null,
        pesoCajaBlanca: number | null,
        altoCajaBlanca: number | null,
        anchoCajaBlanca: number | null,
        profundidadCajaBlanca: number | null,
        modeloLente: string,
        pesoLente: number | null,
        colorLente: string,
        cantidadLentes: number | null
    ) {
        this.nombreCajaBlanca = nombreCajaBlanca;
        this.pesoCajaBlancaVacia = pesoCajaBlancaVacia;
        this.pesoCajaBlanca = pesoCajaBlanca;
        this.altoCajaBlanca = altoCajaBlanca;
        this.anchoCajaBlanca = anchoCajaBlanca;
        this.profundidadCajaBlanca = profundidadCajaBlanca;
        this.modeloLente = modeloLente;
        this.pesoLente = pesoLente;
        this.colorLente = colorLente;
        this.cantidadLentes = cantidadLentes;
        this.contraido = false; // Inicialmente no contraído
    }
}
