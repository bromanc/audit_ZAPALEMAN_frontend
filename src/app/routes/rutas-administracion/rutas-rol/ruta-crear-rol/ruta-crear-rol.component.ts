import { Rol } from 'src/app/models/rol';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/http/rol.service';

@Component({
  selector: 'app-ruta-crear-rol',
  templateUrl: './ruta-crear-rol.component.html',
  styleUrls: ['./ruta-crear-rol.component.css']
})
export class RutaCrearRolComponent implements OnInit {

  constructor(
    private readonly _rolService: RolService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearRol(rol: Rol) {
    const observableCrearRol = this._rolService.add(rol);
    observableCrearRol
      .subscribe(
        () => {
          console.log('Rol registrado: ', rol);
          const ruta = ['lista-rol'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando rol', error);
        }
      );
  }
}
