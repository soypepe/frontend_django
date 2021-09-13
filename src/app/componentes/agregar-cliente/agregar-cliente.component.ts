import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {

  cliente = {
    nombre: '',
    direccion: '',
    telefono: '',
    ci: '',
    edad: 0,
    fecha: '',
    sexo: '',
  }
  enviado = false

  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {
  }

  crearCliente(): void {
    const formulario = {
      nombre: this.cliente.nombre,
      direccion: this.cliente.direccion,
      telefono: this.cliente.telefono,
      ci: this.cliente.ci,
      edad: this.cliente.edad,
      fecha: new DatePipe('en-US').transform(this.cliente.fecha, 'dd/MM/yyyy'),
      sexo: this.cliente.sexo,
    }

    this.clienteServicio.crearCliente(formulario)
      .subscribe(respuesta => {
        console.log(respuesta)
        this.enviado = true
      })
  }

  nuevoCliente(): void {
    this.enviado = false
    this.cliente = {
      nombre: '',
      direccion: '',
      telefono: '',
      ci: '',
      fecha: '',
      edad: 0,
      sexo: '',
    }
  }

}
