import { RutaCarritoComponent } from './routes/rutas-cliente/ruta-carrito/ruta-carrito.component';
import { RutaContactoComponent } from './routes/rutas-cliente/ruta-contacto/ruta-contacto.component';
import { RutaServiciosComponent } from './routes/rutas-cliente/ruta-servicios/ruta-servicios.component';
import { RutaProductosComponent } from './routes/rutas-cliente/ruta-productos/ruta-productos.component';
import { RutaNosotrosComponent } from './routes/rutas-cliente/ruta-nosotros/ruta-nosotros.component';
import { RutaInicioComponent } from './routes/rutas-cliente/ruta-inicio/ruta-inicio.component';
import { RutaEditarServicioComponent } from './routes/rutas-administracion/rutas-servicio/ruta-editar-servicio/ruta-editar-servicio.component';
import { RutaCrearServicioComponent } from './routes/rutas-administracion/rutas-servicio/ruta-crear-servicio/ruta-crear-servicio.component';
import { RutaListaServicioComponent } from './routes/rutas-administracion/rutas-servicio/ruta-lista-servicio/ruta-lista-servicio.component';
import { RutaListaProductoComponent } from './routes/rutas-administracion/rutas-producto/ruta-lista-producto/ruta-lista-producto.component';
import { RutaEditarRolComponent } from './routes/rutas-administracion/rutas-rol/ruta-editar-rol/ruta-editar-rol.component';
import { RutaListaRolComponent } from './routes/rutas-administracion/rutas-rol/ruta-lista-rol/ruta-lista-rol.component';
import { RutaEditarUsuarioComponent } from './routes/rutas-administracion/rutas-usuario/ruta-editar-usuario/ruta-editar-usuario.component';
import { RutaCrearUsuarioComponent } from './routes/rutas-administracion/rutas-usuario/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaRegistroComponent } from './routes/ruta-registro/ruta-registro.component';
import { RutaLoginComponent } from './routes/ruta-login/ruta-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaListaUsuarioComponent } from './routes/rutas-administracion/rutas-usuario/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearRolComponent } from './routes/rutas-administracion/rutas-rol/ruta-crear-rol/ruta-crear-rol.component';
import { RutaCrearProductoComponent } from './routes/rutas-administracion/rutas-producto/ruta-crear-producto/ruta-crear-producto.component';
import { RutaEditarProductoComponent } from './routes/rutas-administracion/rutas-producto/ruta-editar-producto/ruta-editar-producto.component';

const routes: Routes = [
  {
    component: RutaLoginComponent,
    path: 'login',
  },
  {
    component: RutaRegistroComponent,
    path: 'registro',
  },
  {
    component: RutaListaUsuarioComponent,
    path: 'lista-usuario',
  },
  {
    component: RutaCrearUsuarioComponent,
    path: 'crear-usuario'
  },
  {
    component: RutaEditarUsuarioComponent,
    path: 'editar-usuario/:id'
  },
  {
    component: RutaListaRolComponent,
    path: 'lista-rol',
  },
  {
    component: RutaCrearRolComponent,
    path: 'crear-rol',
  },
  {
    component: RutaEditarRolComponent,
    path: 'editar-rol/:id',
  },
  {
    component: RutaListaProductoComponent,
    path: 'lista-producto',
  },
  {
    component: RutaCrearProductoComponent,
    path: 'crear-producto',
  },
  {
    component: RutaEditarProductoComponent,
    path: 'editar-producto/:id',
  },
  {
    component: RutaListaServicioComponent,
    path: 'lista-servicio',
  },
  {
    component: RutaCrearServicioComponent,
    path: 'crear-servicio',
  },
  {
    component: RutaEditarServicioComponent,
    path: 'editar-servicio/:id',
  },
  {
    component: RutaInicioComponent,
    path: 'inicio',
  },
  {
    component: RutaNosotrosComponent,
    path: 'nosotros',
  },
  {
    component: RutaProductosComponent,
    path: 'productos',
  },
  {
    component: RutaServiciosComponent,
    path: 'servicios',
  },
  {
    component: RutaContactoComponent,
    path: 'contacto',
  },
  {
    component: RutaCarritoComponent,
    path: 'carrito',
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
