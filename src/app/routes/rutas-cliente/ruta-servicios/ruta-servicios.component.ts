import { ServicioService } from 'src/app/services/http/servicio.service';
import { DetalleFactura } from 'src/app/models/detalle-factura';
import { Servicio } from 'src/app/models/servicio';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { SesionService } from 'src/app/services/sesion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-servicios',
  templateUrl: './ruta-servicios.component.html',
  styleUrls: ['./ruta-servicios.component.css']
})
export class RutaServiciosComponent implements OnInit {

  arregloServicios: Servicio[] = [];

  sesion: boolean;

  arregloCarrito: DetalleFactura[] = [];

  constructor(
    private readonly _servicioService: ServicioService,
    private _carritoService: CarritoService,
    private _sesionService: SesionService,
    private readonly _router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    const observableServicios = this._servicioService.get();
    observableServicios
      .subscribe(
        (servicios: Servicio[]) => {
          this.arregloServicios = servicios;
        },
        error => {
          console.error('Error obteniendo servicios', error);
        }
      );

    this._sesionService.seleccionarSesion.subscribe(sesion => this.sesion = sesion);
    this._carritoService.dataSource$.subscribe(detalles => this.arregloCarrito = detalles);
  }

  enviarCarrito(id: number) {
    if (this.sesion) {
      const observableObtenerServicio = this._servicioService.getById(id);
      observableObtenerServicio
        .subscribe(
          (servicio: Servicio) => {
            const servicioCarrito = servicio;

            this.arregloCarrito.push(
              new DetalleFactura(
                1,
                servicioCarrito.precio,
                0,
                undefined,
                servicioCarrito.id
              )
            );

            this._carritoService.cambiarCarrito(this.arregloCarrito);
            this.toastr.success('Felicidades', ' Servicio Añadido a Carrito',
            {timeOut: 2000});;
          },
          error => {
            console.error('Error obteniendo informacion de servicio', error);
          }
        );
    } else {
      const rutaLogin = ['/login'];
      this._router.navigate(rutaLogin);
    }
  }
}
