import Anuncio from "./anuncio-base.js";

export class Anuncio_Auto extends Anuncio {
    constructor(id, titulo, descripcion, transaccion, precio, puertas, kilometros, potencia){
        super(id, titulo, descripcion, transaccion, precio);
        this.puertas = puertas;
        this.kms = kilometros;
        this.potencia = potencia;
    }
}