import { Global } from '../global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from 'src/app/models/factura';

@Injectable()
export class FacturaService {
  
  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/Factura');
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/Factura/' + id);
  }

  add(factura: Factura) {
    return this._httpClient.post(this.url + '/Factura', factura);
  }

  update(id: number, factura: Factura) {
    return this._httpClient.put(this.url + '/Factura/' + id, factura);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/Factura/' + id);
  }
}
