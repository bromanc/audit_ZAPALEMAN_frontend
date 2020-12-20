import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleFactura } from 'src/app/models/detalle-factura';
import { Global } from '../global';

@Injectable()
export class DetalleFacturaService {

  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/DetalleFactura');
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/DetalleFactura/' + id);
  }

  add(detalleFactura: DetalleFactura) {
    return this._httpClient.post(this.url + '/DetalleFactura', detalleFactura);
  }

  update(id: number, detalleFactura: DetalleFactura) {
    return this._httpClient.put(this.url + '/DetalleFactura/' + id, detalleFactura);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/DetalleFactura/' + id);
  }
}
