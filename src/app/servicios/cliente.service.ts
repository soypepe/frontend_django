import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment as env } from 'src/environments/environment'
import { Cliente } from '../modelos'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Array<Cliente>> {
    return this.http.get<Array<Cliente>>(`${env.DIRECCION}clientes-lista`)
  }

  clienteDetalles(id: number): Observable<Array<Cliente>> {
    return this.http.get<Array<Cliente>>(`${env.DIRECCION}cliente-detalle/${id}`)
  }

  crearCliente(datos: any): Observable<any> {
    return this.http.post<Cliente>(`${env.DIRECCION}cliente-crear`, datos)
  }

  actualizarCliente(id: number, datos: any): Observable<any> {
    return this.http.put(`${env.DIRECCION}cliente-actualizar/${id}`, datos)
  }

  borrarCliente(id: number): Observable<any> {
    return this.http.delete(`${env.DIRECCION}cliente-borrar/${id}`)
  }
}
