import { Usuario } from 'src/app/models/usuario';
import { Global } from '../global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  url: string = Global.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get() {
    return this._httpClient.get(this.url + '/Usuario');
  }

  getById(id: number) {
    return this._httpClient.get(this.url + '/Usuario/' + id);
  }

  add(usuario: Usuario) {
    return this._httpClient.post(this.url + '/Usuario', usuario);
  }

  update(id: number, usuario: Usuario) {
    return this._httpClient.put(this.url + '/Usuario/' + id, usuario);
  }

  delete(id: number) {
    return this._httpClient.delete(this.url + '/Usuario/' + id);
  }
}
