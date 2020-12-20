import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.css']
})
export class FormularioServicioComponent implements OnInit {

  @Input()
  servicioEditar: Servicio;

  @Output()
  enviarFormularioEvent: EventEmitter<Servicio> = new EventEmitter<Servicio>();

  locationImages: string = 'assets/images/';

  nombreFormulario: string;
  descripcionFormulario: string;
  precioFormulario: number;
  imagenFormulario: string;

  constructor() { }

  ngOnInit(): void {
    if (this.servicioEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Servicio(
        formulario.form.value.nombre,
        formulario.form.value.descripcion,
        formulario.form.value.precio,
        this.locationImages + formulario.form.value.imagen
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.servicioEditar.nombre;
    this.descripcionFormulario = this.servicioEditar.descripcion;
    this.precioFormulario = this.servicioEditar.precio;
    const imagenNombre = this.servicioEditar.imagen.split('/');
    this.imagenFormulario = imagenNombre[imagenNombre.length - 1];
  }
}
