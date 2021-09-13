import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { APIRespuesta, Cliente } from 'src/app/modelos';
import { ClienteService } from '../../servicios/cliente.service'

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss']
})
export class ClientesListaComponent implements OnInit, OnDestroy {

  public clientes: Cliente | any
  private rutaSub: Subscription | undefined
  private clienteSub: Subscription | undefined

  constructor(
    private clienteServicio: ClienteService,
    private ruta: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClientes()
  }

  getClientes(): void {
    this.clienteSub = this.clienteServicio.getTodos()
      .subscribe((clientesLista: APIRespuesta<Cliente>) => {
        this.clientes = clientesLista
      },
        error => {
          console.log(error)
        })
  }

  getClienteDetalles(id: number): void {
    this.router.navigate(['cliente-detalles', id])
  }

  agregarCliente(): void {
    this.router.navigate(['agregar-cliente'])
  }

  ngOnDestroy(): void {
    if (this.clienteSub) {
      this.clienteSub.unsubscribe()
    }

    if (this.rutaSub) {
      this.rutaSub.unsubscribe()
    }
  }

}
