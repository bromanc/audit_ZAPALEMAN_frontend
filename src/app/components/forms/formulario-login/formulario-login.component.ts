import { SesionService } from './../../../services/sesion.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  @Input()
  usuarios: Usuario[] = [];

  @Output()
  rutaSesionEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  validacion: boolean = false;
  error: string;

  emailFormulario: string;
  contrasenaFormulario: string;

  constructor(
    private _sesionService: SesionService
  ) { }

  ngOnInit(): void {
  }

  validarUsuario(formulario: NgForm) {
    const validarUsuario =  this.usuarios.find(usuario => usuario.email === formulario.form.value.email);
    if (validarUsuario) {
      if(validarUsuario.password === formulario.form.value.password) {
        this._sesionService.cambiarSesion(true);
        if (validarUsuario.rol.nombre === 'Administrador') {
          this._sesionService.cambiarRol(true);
          this.validacion = true;
        } else {
          this._sesionService.cambiarRol(false);
          this.validacion = false;
        }
        this.rutaSesionEvent.emit(this.validacion);
      } else {
        this.error = '* La contraseña que ingresaste es incorrecta'
      }
    } else {
      this.error = '* Usuario no registrado';
    }
  }
}
