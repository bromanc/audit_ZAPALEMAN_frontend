import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/http/usuario.service';

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario: Usuario) {
    const observableCrearUsuario = this._usuarioService.add(usuario);
    observableCrearUsuario
      .subscribe(
        () => {
          console.log('Usuario registrado: ', usuario);
          const ruta = ['/lista-usuario'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando usuario', error);
        }
      );
  }
}
