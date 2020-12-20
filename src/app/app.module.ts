import { CarritoService } from './services/carrito.service';
import { SesionService } from './services/sesion.service';
import { DetalleFacturaService } from './services/http/detalle-factura.service';
import { ServicioService } from './services/http/servicio.service';
import { ProductoService } from './services/http/producto.service';
import { FacturaService } from './services/http/factura.service';
import { RolService } from './services/http/rol.service';
import { UsuarioService } from './services/http/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RutaLoginComponent } from './routes/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './routes/ruta-registro/ruta-registro.component';
import { RutaListaUsuarioComponent } from './routes/rutas-administracion/rutas-usuario/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './routes/rutas-administracion/rutas-usuario/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './routes/rutas-administracion/rutas-usuario/ruta-editar-usuario/ruta-editar-usuario.component';
import { FormularioUsuarioComponent } from './components/forms/formulario-usuario/formulario-usuario.component';
import { FormularioRolComponent } from './components/forms/formulario-rol/formulario-rol.component';
import { RutaListaRolComponent } from './routes/rutas-administracion/rutas-rol/ruta-lista-rol/ruta-lista-rol.component';
import { RutaCrearRolComponent } from './routes/rutas-administracion/rutas-rol/ruta-crear-rol/ruta-crear-rol.component';
import { RutaEditarRolComponent } from './routes/rutas-administracion/rutas-rol/ruta-editar-rol/ruta-editar-rol.component';
import { FormularioProductoComponent } from './components/forms/formulario-producto/formulario-producto.component';
import { FormularioServicioComponent } from './components/forms/formulario-servicio/formulario-servicio.component';
import { RutaListaProductoComponent } from './routes/rutas-administracion/rutas-producto/ruta-lista-producto/ruta-lista-producto.component';
import { RutaCrearProductoComponent } from './routes/rutas-administracion/rutas-producto/ruta-crear-producto/ruta-crear-producto.component';
import { RutaEditarProductoComponent } from './routes/rutas-administracion/rutas-producto/ruta-editar-producto/ruta-editar-producto.component';
import { RutaListaServicioComponent } from './routes/rutas-administracion/rutas-servicio/ruta-lista-servicio/ruta-lista-servicio.component';
import { RutaCrearServicioComponent } from './routes/rutas-administracion/rutas-servicio/ruta-crear-servicio/ruta-crear-servicio.component';
import { RutaEditarServicioComponent } from './routes/rutas-administracion/rutas-servicio/ruta-editar-servicio/ruta-editar-servicio.component';
import { FormularioRegistroComponent } from './components/forms/formulario-registro/formulario-registro.component';
import { RutaInicioComponent } from './routes/rutas-cliente/ruta-inicio/ruta-inicio.component';
import { FormularioLoginComponent } from './components/forms/formulario-login/formulario-login.component';
import { RutaNosotrosComponent } from './routes/rutas-cliente/ruta-nosotros/ruta-nosotros.component';
import { RutaProductosComponent } from './routes/rutas-cliente/ruta-productos/ruta-productos.component';
import { RutaServiciosComponent } from './routes/rutas-cliente/ruta-servicios/ruta-servicios.component';
import { RutaContactoComponent } from './routes/rutas-cliente/ruta-contacto/ruta-contacto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { RutaCarritoComponent } from './routes/rutas-cliente/ruta-carrito/ruta-carrito.component';
 
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    RutaLoginComponent,
    RutaRegistroComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    FormularioUsuarioComponent,
    FormularioRolComponent,
    RutaListaRolComponent,
    RutaCrearRolComponent,
    RutaEditarRolComponent,
    FormularioProductoComponent,
    FormularioServicioComponent,
    RutaListaProductoComponent,
    RutaCrearProductoComponent,
    RutaEditarProductoComponent,
    RutaListaServicioComponent,
    RutaCrearServicioComponent,
    RutaEditarServicioComponent,
    FormularioRegistroComponent,
    RutaInicioComponent,
    FormularioLoginComponent,
    RutaNosotrosComponent,
    RutaProductosComponent,
    RutaServiciosComponent,
    RutaContactoComponent,
    RutaCarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgbModule,
    MatGridListModule,
    MatCardModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    UsuarioService,
    RolService,
    FacturaService,
    ProductoService,
    ServicioService,
    DetalleFacturaService,
    SesionService,
    CarritoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
