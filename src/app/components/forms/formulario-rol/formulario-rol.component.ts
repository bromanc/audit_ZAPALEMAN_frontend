import { Rol } from 'src/app/models/rol';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-rol',
  templateUrl: './formulario-rol.component.html',
  styleUrls: ['./formulario-rol.component.css']
})
export class FormularioRolComponent implements OnInit {

  @Input()
  rolEditar: Rol;

  @Output()
  enviarFormularioEvent: EventEmitter<Rol> = new EventEmitter<Rol>();

  nombreFormulario: string;
  descripcionFormulario: string;

  constructor() { }

  ngOnInit(): void {
    if (this.rolEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Rol(
        formulario.form.value.nombre,
        formulario.form.value.descripcion
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.rolEditar.nombre;
    this.descripcionFormulario = this.rolEditar.descripcion;
  }
}
