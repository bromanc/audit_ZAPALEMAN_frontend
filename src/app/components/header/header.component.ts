import { CarritoService } from './../../services/carrito.service';
import { SesionService } from './../../services/sesion.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  sesion: boolean;

  @Input()
  rol: boolean;

  urlLogo = '../../../assets/images/logo.jpg';

  constructor(
    private readonly _router: Router,
    private _sesionService: SesionService,
    private _carritoService: CarritoService
  ) { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes)
  // }

  irARegistroOCarrito() {
    if (this.sesion) {
      const rutaCarrito = ['/carrito'];
      this._router.navigate(rutaCarrito);
    } else {
      const rutaRegistro = ['/registro'];
      this._router.navigate(rutaRegistro);
    }
  }

  irALogin() {
    if (this.sesion) {
      this._sesionService.cambiarSesion(false);
      this._sesionService.cambiarRol(false);
      this._carritoService.cambiarCarrito([]);
      const rutaInicio = ['/inicio'];
      this._router.navigate(rutaInicio);
    } else {
      const rutaLogin = ['/login'];
      this._router.navigate(rutaLogin);
    }
  }
}
