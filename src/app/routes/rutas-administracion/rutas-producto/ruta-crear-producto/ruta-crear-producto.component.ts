import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/http/producto.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-crear-producto',
  templateUrl: './ruta-crear-producto.component.html',
  styleUrls: ['./ruta-crear-producto.component.css']
})
export class RutaCrearProductoComponent implements OnInit {

  constructor(
    private readonly _productoService: ProductoService,
    private readonly _router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  crearProducto(producto: Producto) {
    const observableCrearProducto = this._productoService.add(producto);
    observableCrearProducto
      .subscribe(
        () => {
          console.log('Producto registrado: ', producto);
          const ruta = ['/lista-producto'];
          this._router.navigate(ruta);
          this.toastr.success('Correcto', ' Producto Creado',
          {timeOut: 2000});;
        },
        error => {
          console.error('Error registrando producto', error);
        }
      );
  }
}
