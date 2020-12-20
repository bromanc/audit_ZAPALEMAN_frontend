import { Producto } from 'src/app/models/producto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/services/http/producto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-lista-producto',
  templateUrl: './ruta-lista-producto.component.html',
  styleUrls: ['./ruta-lista-producto.component.css']
})
export class RutaListaProductoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'imagen', 'talla', 'color', 'descripcion', 'precio', 'acciones'];

  arregloProductos: Producto[] = [];

  dataSource = new MatTableDataSource<Producto>();

  constructor(
    private readonly _productoService: ProductoService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    const observableProductos = this._productoService.get();
    observableProductos
      .subscribe(
        (productos: Producto[]) => {
          this.arregloProductos = productos;
          this.dataSource.data = this.arregloProductos;
        },
        error => {
          console.error('Error obteniendo productos', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarProducto(id: number) {
    const observableEliminarProducto = this._productoService.delete(id);
    observableEliminarProducto
      .subscribe(
        () => {
          const indice = this.arregloProductos.findIndex(producto => producto.id === id);
          this.arregloProductos.splice(indice, 1);
          this.dataSource.data = this.arregloProductos;
          this.toastr.success('Correcto', ' Producto Eliminado',
          {timeOut: 2000});;
        },
        error => {
          console.error('Error eliminando producto', error);
        }
      );
  }
}
