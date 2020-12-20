import { Global } from './../../services/global';
import { UsuarioService } from 'src/app/services/http/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  arregloUsuarios: Usuario[] = [];

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableUsuarios = this._usuarioService.get();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );
  }

  mostrarRuta(rol: boolean) {
      if (rol) {
        const rutaAdministrador = ['lista-usuario'];
        this._router.navigate(rutaAdministrador);
      } else {
        const rutaUsuario = ['inicio'];
        this._router.navigate(rutaUsuario);
      } 
  }

}
