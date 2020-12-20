import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ruta-contacto',
  templateUrl: './ruta-contacto.component.html',
  styleUrls: ['./ruta-contacto.component.css']
})
export class RutaContactoComponent implements OnInit {

  @Output()
  enviarFormularioEvent: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  nombreFormulario: string;
  apellidoFormulario: string;
  emailFormulario: string;
  telefonoFormulario: string;
  mensajeFormulario: string;
  constructor(  private toastr: ToastrService,) { }

  ngOnInit(): void {
  }
  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(formulario);
    this.toastr.success('Muy bien!!', ' Formulario Enviado',
    {timeOut: 2000});;
  }
}
