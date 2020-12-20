import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { RolService } from 'src/app/services/http/rol.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  usuarioEditar: Usuario;

  @Output()
  enviarFormularioEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  arregloRoles: Rol[] = [];

  confirmacion: boolean = true;
  seleccion: boolean = true;

  nombreFormulario: string;
  apellidoFormulario: string;
  emailFormulario: string;
  contrasenaFormulario: string;
  contrasenaConfirmacionFormulario: string;
  rolFormulario: number = 0;

  constructor(
    private readonly _rolService: RolService
  ) { }

  ngOnInit(): void {
    const observableRoles = this._rolService.get();
    observableRoles
      .subscribe(
        (roles: Rol[]) => {
          this.arregloRoles = roles;
        },
        error => {
          console.error('Error obteniendo roles', error);
        }
      );

    if (this.usuarioEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Usuario(
        formulario.form.value.nombre,
        formulario.form.value.apellido,
        formulario.form.value.password,
        formulario.form.value.email,
        Number(formulario.form.value.rol))
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.usuarioEditar.nombre;
    this.apellidoFormulario = this.usuarioEditar.apellido;
    this.emailFormulario = this.usuarioEditar.email;
    this.rolFormulario = this.usuarioEditar.rol.id;
    this.contrasenaFormulario = this.usuarioEditar.password;
    this.contrasenaConfirmacionFormulario = this.usuarioEditar.password;

    this.confirmarContrasena();
    this.seleccionarRol();
  }

  seleccionarRol() {
    if (Number(this.rolFormulario) != 0) {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }

  confirmarContrasena() {
    if (this.contrasenaConfirmacionFormulario === this.contrasenaFormulario) {
      this.confirmacion = false;
    } else {
      this.confirmacion = true;
    }
  }

}
