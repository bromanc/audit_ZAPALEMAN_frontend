import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DetalleFactura } from '../models/detalle-factura';

@Injectable()
export class CarritoService {

  detalles: Array<DetalleFactura> = [];

  public _dataSource = new BehaviorSubject<Array<DetalleFactura>>([]);
  dataSource$ = this._dataSource.asObservable();

  constructor() { }

  public cambiarCarrito(carrito: Array<DetalleFactura>) {
    this.detalles = carrito;
    this._dataSource.next(carrito);
  }
  
}
