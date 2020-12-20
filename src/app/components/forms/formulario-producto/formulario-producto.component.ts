import { Producto } from 'src/app/models/producto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  @Input()
  productoEditar: Producto;

  @Output()
  enviarFormularioEvent: EventEmitter<Producto> = new EventEmitter<Producto>();

  locationImages: string = 'assets/images/';

  nombreFormulario: string;
  colorFormulario: string;
  tallaFormulario: number;
  descripcionFormulario: string;
  precioFormulario: number;
  imagenFormulario: string;

  constructor() { }

  ngOnInit(): void {
    if (this.productoEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Producto(
        formulario.form.value.nombre,
        formulario.form.value.color,
        formulario.form.value.talla,
        formulario.form.value.descripcion,
        formulario.form.value.precio,
        this.locationImages + formulario.form.value.imagen
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.productoEditar.nombre;
    this.colorFormulario = this.productoEditar.color;
    this.tallaFormulario = this.productoEditar.talla;
    this.descripcionFormulario = this.productoEditar.descripcion;
    this.precioFormulario = this.productoEditar.precio;
    const imagenNombre = this.productoEditar.imagen.split('/');
    this.imagenFormulario = imagenNombre[imagenNombre.length - 1];
  }
}
