import { ProductoService } from 'src/app/services/http/producto.service';
import { Producto } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-editar-producto',
  templateUrl: './ruta-editar-producto.component.html',
  styleUrls: ['./ruta-editar-producto.component.css']
})
export class RutaEditarProductoComponent implements OnInit {

  mostrarFormulario: boolean = false;

  id: number;
  producto: Producto;

  constructor(
    private readonly _productoService: ProductoService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    const observableRutaProducto = this._activatedRoute.params;
    observableRutaProducto
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerProducto = this._productoService.getById(this.id);
          observableObtenerProducto
            .subscribe(
              (producto: Producto) => {
                this.producto = producto;
                this.llenarFormularioProducto();
              },
              error => {
                console.error('Error obteniendo producto', error);
              }
            );
        }
      );
  }

  llenarFormularioProducto() {
    this.mostrarFormulario = true;
  }

  actualizarProducto(producto: Producto) {
    const observableActualizarProducto = this._productoService.update(this.id, producto);
    observableActualizarProducto
      .subscribe(
        () => {
          console.log('Producto actualizado:', producto);
          const ruta = ['lista-producto'];
          this._router.navigate(ruta);
          this.toastr.success('Correcto', ' Producto Actualizado',
          {timeOut: 2000});;
        },
        error => {
          console.error('Error actualizando producto', error);
          this.toastr.success('Incorrecto', ' Producto No Actualizado',
          {timeOut: 2000});;
        }
      );
  }
}
