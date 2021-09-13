import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { ClienteDetallesComponent } from './componentes/cliente-detalles/cliente-detalles.component';
import { ClientesListaComponent } from './componentes/clientes-lista/clientes-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AgregarClienteComponent,
    ClienteDetallesComponent,
    ClientesListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
