import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SesionService {

  private sesion = new BehaviorSubject<boolean>(false);
  private rol = new BehaviorSubject<boolean>(false);

  public seleccionarSesion = this.sesion.asObservable();
  public seleccionarRol = this.rol.asObservable();

  constructor() { }

  public cambiarSesion(estado: boolean) {
    this.sesion.next(estado);
  }

  public cambiarRol(estado: boolean) {
    this.rol.next(estado);
  }
}
