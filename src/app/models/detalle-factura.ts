import { Servicio } from './servicio';
import { Producto } from './producto';
import { Factura } from './factura';

export class DetalleFactura {
    constructor(
        public cantidad: number,
        public subtotal: number,
        public factura: Factura | number | any,
        public producto?: Producto | number | any,
        public servicio?: Servicio | number | any,
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
