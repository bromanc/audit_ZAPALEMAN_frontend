import { Usuario } from './usuario';

export class Rol {
    constructor(
        public nombre: string,
        public descripcion: string,
        public usuarios?: Usuario[],
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
