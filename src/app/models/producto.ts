import { DetalleFactura } from './detalle-factura';

export class Producto {
    constructor(
        public nombre: string,
        public color: string,
        public talla: number,
        public descripcion: string,
        public precio: number,
        public imagen: string,
        public detalles?: DetalleFactura[], 
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
