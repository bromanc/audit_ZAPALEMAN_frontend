import { Factura } from './factura';
import { Rol } from './rol';

export class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
        public password: string,
        public email: string,
        public rol: Rol | number | any,
        public facturas?: Factura[],
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
