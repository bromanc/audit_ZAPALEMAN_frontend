import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/http/rol.service';

@Component({
  selector: 'app-ruta-lista-rol',
  templateUrl: './ruta-lista-rol.component.html',
  styleUrls: ['./ruta-lista-rol.component.css']
})
export class RutaListaRolComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'descripcion', 'acciones'];

  arregloRoles: Rol[] = [];

  dataSource = new MatTableDataSource<Rol>();

  constructor(
    private readonly _rolService: RolService
  ) { }

  ngOnInit(): void {
    const observableRoles = this._rolService.get();
    observableRoles
      .subscribe(
        (roles: Rol[]) => {
          this.arregloRoles = roles;
          this.dataSource.data = this.arregloRoles;
        },
        error => {
          console.error('Error obteniendo roles', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarRol(id: number) {
    const observableEliminarRol = this._rolService.delete(id);
    observableEliminarRol
      .subscribe(
        () => {
          const indice = this.arregloRoles.findIndex(rol => rol.id === id);
          this.arregloRoles.splice(indice, 1);
          this.dataSource.data = this.arregloRoles;
        },
        error => {
          console.error('Error eliminando rol', error);
        }
      );
  }
}
