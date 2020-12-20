import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/http/servicio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-lista-servicio',
  templateUrl: './ruta-lista-servicio.component.html',
  styleUrls: ['./ruta-lista-servicio.component.css']
})
export class RutaListaServicioComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'imagen', 'descripcion', 'precio', 'acciones'];

  arregloServicios: Servicio[] = [];

  dataSource = new MatTableDataSource<Servicio>();

  constructor(
    private readonly _servicioService: ServicioService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    const observableServicios = this._servicioService.get();
    observableServicios
      .subscribe(
        (servicios: Servicio[]) => {
          this.arregloServicios = servicios;
          this.dataSource.data = this.arregloServicios;
        },
        error => {
          console.error('Error obteniendo servicios', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarServicio(id: number) {
    const observableEliminarServicio = this._servicioService.delete(id);
    observableEliminarServicio
      .subscribe(
        () => {
          const indice = this.arregloServicios.findIndex(servicio => servicio.id === id);
          this.arregloServicios.splice(indice, 1);
          this.dataSource.data = this.arregloServicios;
          this.toastr.success('Correcto', ' Servicio Eliminado',
          {timeOut: 2000});;
        },
        error => {
          console.error('Error eliminando servicio', error);
        }
      );
  }
}
