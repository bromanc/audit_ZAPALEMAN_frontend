import { SesionService } from './../../../services/sesion.service';
import { DetalleFactura } from 'src/app/models/detalle-factura';
import { CarritoService } from './../../../services/carrito.service';
import { ProductoService } from 'src/app/services/http/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-productos',
  templateUrl: './ruta-productos.component.html',
  styleUrls: ['./ruta-productos.component.css']
})
export class RutaProductosComponent implements OnInit {

  arregloProductos: Producto[] = [];

  cantidadProducto: number = 1;
  sesion: boolean;

  arregloCarrito: DetalleFactura[] = [];

  constructor(
    private readonly _productoService: ProductoService,
    private _carritoService: CarritoService,
    private _sesionService: SesionService,
    private readonly _router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    const observableProductos = this._productoService.get();
    observableProductos
      .subscribe(
        (productos: Producto[]) => {
          this.arregloProductos = productos;
        },
        error => {
          console.error('Error obteniendo productos', error);
        }
      );

    this._sesionService.seleccionarSesion.subscribe(sesion => this.sesion = sesion);
    this._carritoService.dataSource$.subscribe(detalles => this.arregloCarrito = detalles);
  }
  
  enviarCarrito(id: number) {
    if (this.sesion) {
      const observableObtenerProducto = this._productoService.getById(id);
      observableObtenerProducto
        .subscribe(
          (producto: Producto) => {
            const productoCarrito = producto;

            this.arregloCarrito.push(
              new DetalleFactura(
                this.cantidadProducto,
                (this.cantidadProducto * productoCarrito.precio),
                0,
                productoCarrito.id
              )
            );
            
            this._carritoService.cambiarCarrito(this.arregloCarrito);
            this.cantidadProducto = 1;
            this.toastr.success('Felicidades', ' Añadido a Carrito',
            {timeOut: 2000});;
          },
          error => {
            console.error('Error obteniendo informacion de producto', error);
          }
        );
    } else {
      const rutaLogin = ['/login'];
      this._router.navigate(rutaLogin);
    }
  }
}
