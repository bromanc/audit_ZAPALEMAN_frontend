import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  @Output()
  enviarFormularioEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  confirmacion: boolean = true;

  nombreFormulario: string;
  apellidoFormulario: string;
  emailFormulario: string;
  contrasenaFormulario: string;
  contrasenaConfirmacionFormulario: string;

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Usuario(
        formulario.form.value.nombre,
        formulario.form.value.apellido,
        formulario.form.value.password,
        formulario.form.value.email,
        2)
    );
  }

  confirmarContrasena() {
    if (this.contrasenaConfirmacionFormulario === this.contrasenaFormulario) {
      this.confirmacion = false;
    } else {
      this.confirmacion = true;
    }
  }
}
