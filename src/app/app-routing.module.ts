import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './componentes/clientes-lista/clientes-lista.component'
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component'
import { ClienteDetallesComponent } from './componentes/cliente-detalles/cliente-detalles.component'

const routes: Routes = [
  { path: 'clientes-lista', component: ClientesListaComponent },
  { path: 'agregar-cliente', component: AgregarClienteComponent },
  { path: 'cliente-detalles/:id', component: ClienteDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
