import { Servicio } from 'src/app/models/servicio';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/http/servicio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-crear-servicio',
  templateUrl: './ruta-crear-servicio.component.html',
  styleUrls: ['./ruta-crear-servicio.component.css']
})
export class RutaCrearServicioComponent implements OnInit {

  constructor(
    private readonly _servicioService: ServicioService,
    private readonly _router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  crearServicio(servicio: Servicio) {
    const observableCrearServicio = this._servicioService.add(servicio);
    observableCrearServicio
      .subscribe(
        () => {
          console.log('Servicio registrado: ', servicio);
          const ruta = ['/lista-servicio'];
          this._router.navigate(ruta);
          this.toastr.success('Correcto', ' Servicio Creado',
          {timeOut: 2000});;
        },
        error => {
          console.error('Error registrando servicio', error);
        }
      );
  }
}
