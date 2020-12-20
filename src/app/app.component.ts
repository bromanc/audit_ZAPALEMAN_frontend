import { SesionService } from './services/sesion.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  administrador: Object[] = [
    {
      ruta: 'lista-usuario',
      etiqueta: 'Usuarios'
    },
    {
      ruta: 'lista-producto',
      etiqueta: 'Productos'
    },
    {
      ruta: 'lista-servicio',
      etiqueta: 'Servicios'
    },
    {
      ruta: 'lista-rol',
      etiqueta: 'Roles'
    }
  ];
  cliente: Object[] = [
    {
      ruta: 'inicio',
      etiqueta: 'Inicio'
    },
    {
      ruta: 'nosotros',
      etiqueta: 'Nosotros'
    },
    {
      ruta: 'productos',
      etiqueta: 'Productos'
    },
    {
      ruta: 'servicios',
      etiqueta: 'Servicios'
    },
    {
      ruta: 'contacto',
      etiqueta: 'Contacto'
    }
  ];

  sesion: boolean = false;

  rol: boolean = false;

  constructor(
    private _sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this._sesionService.seleccionarSesion.subscribe(sesion => this.sesion = sesion);
    this._sesionService.seleccionarRol.subscribe(rol => this.rol = rol);
  }
}
