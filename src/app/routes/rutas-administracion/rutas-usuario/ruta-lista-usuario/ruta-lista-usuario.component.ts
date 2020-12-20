import { UsuarioService } from './../../../../services/http/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  columnas: string[] = ['nombre', 'email', 'rol', 'acciones'];

  arregloUsuarios: Usuario[] = [];

  dataSource = new MatTableDataSource<Usuario>();

  constructor(
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const observableUsuarios = this._usuarioService.get();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
          this.dataSource.data = this.arregloUsuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(busqueda: string) {
    this.dataSource.filter = busqueda.trim().toLowerCase();
  }

  eliminarUsuario(id: number) {
    const observableEliminarUsuario = this._usuarioService.delete(id);
    observableEliminarUsuario
      .subscribe(
        () => {
          const indice = this.arregloUsuarios.findIndex(usuario => usuario.id === id);
          this.arregloUsuarios.splice(indice, 1);
          this.dataSource.data = this.arregloUsuarios;
        },
        error => {
          console.error('Error eliminando usuario', error);
        }
      );
  }
}
