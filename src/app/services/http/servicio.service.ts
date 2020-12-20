import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { Global } from '../global';

@Injectable()
export class ServicioService {

  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/Servicio');
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/Servicio/' + id);
  }

  add(servicio: Servicio) {
    return this._httpClient.post(this.url + '/Servicio', servicio);
  }

  update(id: number, servicio: Servicio) {
    return this._httpClient.put(this.url + '/Servicio/' + id, servicio);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/Servicio/' + id);
  }
}
