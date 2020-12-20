import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioService } from 'src/app/services/http/servicio.service';
import { Servicio } from 'src/app/models/servicio';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-editar-servicio',
  templateUrl: './ruta-editar-servicio.component.html',
  styleUrls: ['./ruta-editar-servicio.component.css']
})
export class RutaEditarServicioComponent implements OnInit {

  mostrarFormulario: boolean = false;

  id: number;
  servicio: Servicio;

  constructor(
    private readonly _servicioService: ServicioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    const observableRutaServicio = this._activatedRoute.params;
    observableRutaServicio
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerServicio = this._servicioService.getById(this.id);
          observableObtenerServicio
            .subscribe(
              (servicio: Servicio) => {
                this.servicio = servicio;
                this.llenarFormularioServicio();
              },
              error => {
                console.error('Error obteniendo servicio', error);
              }
            );
        }
      );
  }

  llenarFormularioServicio() {
    this.mostrarFormulario = true;
  }

  actualizarServicio(servicio: Servicio) {
    const observableActualizarServicio = this._servicioService.update(this.id, servicio);
    observableActualizarServicio
      .subscribe(
        () => {
          console.log('Servicio actualizado:', servicio);
          const ruta = ['lista-servicio'];
          this._router.navigate(ruta);
          this.toastr.success('Correcto', ' Servicio Actualizado',
          {timeOut: 2000});;
        },
        error => {
          console.error('Error actualizando servicio', error);
        }
      );
  }
}
