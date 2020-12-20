import { UsuarioService } from 'src/app/services/http/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  mostrarFormulario: boolean = false;

  id: number;
  usuario: Usuario;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaUsuario = this._activatedRoute.params;
    observableRutaUsuario
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerUsuario = this._usuarioService.getById(this.id);
          observableObtenerUsuario
            .subscribe(
              (usuario: Usuario) => {
                this.usuario = usuario;
                this.llenarFormularioUsuario();
              },
              error => {
                console.error('Error obteniendo usuario', error);
              }
            );
        }
      );
  }

  llenarFormularioUsuario() {
    this.mostrarFormulario = true;
  }

  actualizarUsuario(usuario: Usuario) {
    const observableActualizarUsuario = this._usuarioService.update(this.id, usuario);
    observableActualizarUsuario
      .subscribe(
        () => {
          console.log('Usuario actualizado:', usuario);
          const ruta = ['lista-usuario'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando usuario', error);
        }
      );
  }
}
