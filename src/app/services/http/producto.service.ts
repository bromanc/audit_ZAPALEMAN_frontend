import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Global } from '../global';

@Injectable()
export class ProductoService {
  
  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/Producto');
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/Producto/' + id);
  }

  add(producto: Producto) {
    return this._httpClient.post(this.url + '/Producto', producto);
  }

  update(id: number, producto: Producto) {
    return this._httpClient.put(this.url + '/Producto/' + id, producto);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/Producto/' + id);
  }
}
