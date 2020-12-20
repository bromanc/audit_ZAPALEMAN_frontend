import { DetalleFactura } from './detalle-factura';

export class Servicio {
    constructor(
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public imagen: string,
        public detalles?: DetalleFactura[],
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
