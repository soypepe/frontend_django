import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ClienteService } from '../../servicios/cliente.service'
import { Cliente } from '../../modelos'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.scss']
})
export class ClienteDetallesComponent implements OnInit, OnDestroy {

  private clienteId: number = 0
  public cliente: Cliente[] | any
  private rutaSub: Subscription | any
  private clienteSub: Subscription | any

  constructor(
    private ruta: ActivatedRoute,
    private http: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rutaSub = this.ruta.params.subscribe((params: Params) => {
      this.clienteId = params['id']
      this.getClienteDetalles(this.clienteId)
    })
  }

  getClienteDetalles(id: number): void {
    this.clienteSub = this.http
      .clienteDetalles(id)
      .subscribe((clienteResp: Cliente[]) => {
        this.cliente = clienteResp
      })
  }

  actualizarCliente(): void {
    if (confirm('Editar el usuario ' + this.cliente.nombre)) {
      this.clienteSub = this.http
        .actualizarCliente(this.cliente.id, this.cliente)
        .subscribe(() => {
          this.router.navigate(['clientes-lista'])
        },
          error => {
            console.log(error)
          })
    }
  }

  borrarCliente(): void {
    if (confirm('Se eliminara el cliente ' + this.cliente.nombre)) {
      this.clienteSub = this.http
        .borrarCliente(this.cliente.id)
        .subscribe(respuesta => {
          console.log(respuesta)
          this.router.navigate(['clientes-lista'])
        },
          error => {
            console.log(error)
          })
    }
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
