import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/http/usuario.service';

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.css']
})
export class RutaRegistroComponent implements OnInit {

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
          const ruta = ['/inicio'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando usuario', error);
        }
      );
  }
}
