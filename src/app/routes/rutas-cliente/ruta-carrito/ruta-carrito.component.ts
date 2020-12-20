import { ServicioService } from 'src/app/services/http/servicio.service';
import { ProductoService } from 'src/app/services/http/producto.service';
import { DetalleFactura } from 'src/app/models/detalle-factura';
import { CarritoService } from './../../../services/carrito.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto';
import { Servicio } from 'src/app/models/servicio';


@Component({
  selector: 'app-ruta-carrito',
  templateUrl: './ruta-carrito.component.html',
  styleUrls: ['./ruta-carrito.component.css']
})
export class RutaCarritoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'imagen', 'cantidad', 'subtotal', 'acciones'];

  arregloProductos: Producto[] = [];
  arregloServicios: Servicio[] = [];
  detallesCarrito: DetalleFactura[] = [];

  dataSource = new MatTableDataSource<DetalleFactura>();

  constructor(
    private _carritoService: CarritoService,
    private readonly _productoService: ProductoService,
    private readonly _servicioService: ServicioService,
   
  ) { }
 

  ngOnInit(): void {
    this._carritoService.dataSource$.subscribe(carrito => this.detallesCarrito = carrito);
    this.dataSource.data = this.detallesCarrito;

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

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  eliminarDetalle(index: number) {
    this.detallesCarrito.splice(index, 1);
    this.dataSource.data = this.detallesCarrito;
    this._carritoService.cambiarCarrito(this.detallesCarrito);
  }

  obtenerNombre(productoId: number, servicioId: number): string{
    if(productoId){
      const productoCarrito = this.arregloProductos.find(producto => producto.id === productoId);
      return productoCarrito.nombre;
    } else {
      const servicioCarrito = this.arregloServicios.find(servicio => servicio.id === servicioId);
      return servicioCarrito.nombre;
    }
  }

  obteneImagen(productoId: number, servicioId: number): string{
    if(productoId){
      const productoCarrito = this.arregloProductos.find(producto => producto.id === productoId);
      return productoCarrito.imagen;
    } else {
      const servicioCarrito = this.arregloServicios.find(servicio => servicio.id === servicioId);
      return servicioCarrito.imagen;
    }
  }
  title = 'angulartoastr';
}
