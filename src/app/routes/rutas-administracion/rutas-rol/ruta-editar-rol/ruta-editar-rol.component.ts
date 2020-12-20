import { RolService } from 'src/app/services/http/rol.service';
import { Rol } from 'src/app/models/rol';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-rol',
  templateUrl: './ruta-editar-rol.component.html',
  styleUrls: ['./ruta-editar-rol.component.css']
})
export class RutaEditarRolComponent implements OnInit {

  mostrarFormulario: boolean = false;

  id: number;
  rol: Rol;

  constructor(
    private readonly _rolService: RolService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaRol = this._activatedRoute.params;
    observableRutaRol
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerRol = this._rolService.getById(this.id);
          observableObtenerRol
            .subscribe(
              (rol: Rol) => {
                this.rol = rol;
                this.llenarFormularioRol();
              },
              error => {
                console.error('Error obteniendo rol', error);
              }
            );
        }
      );
  }

  llenarFormularioRol() {
    this.mostrarFormulario = true;
  }

  actualizarRol(rol: Rol) {
    const observableActualizarRol = this._rolService.update(this.id, rol);
    observableActualizarRol
      .subscribe(
        () => {
          console.log('Rol actualizado: ', rol);
          const ruta = ['lista-rol'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando rol', error);
        }
      );
  }
}
