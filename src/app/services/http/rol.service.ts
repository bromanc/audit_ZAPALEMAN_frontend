import { Rol } from 'src/app/models/rol';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../global';

@Injectable()
export class RolService {

  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/Rol');
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/Rol/' + id);
  }

  add(rol: Rol) {
    return this._httpClient.post(this.url + '/Rol', rol);
  }

  update(id: number, rol: Rol) {
    return this._httpClient.put(this.url + '/Rol/' + id, rol);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/Rol/' + id);
  }
}
