import { DetalleFactura } from './detalle-factura';
import { Usuario } from './usuario';

export class Factura {
    constructor(
        public fecha: number,
        public total: number,
        public usuario: Usuario | number | any,
        public detalles?: DetalleFactura[],
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
