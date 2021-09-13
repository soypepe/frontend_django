import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment as env } from 'src/environments/environment'
import { APIRespuesta, Cliente } from '../modelos'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<APIRespuesta<Cliente>> {
    return this.http.get<APIRespuesta<Cliente>>(`${env.DIRECCION}clientes-lista`)
  }

  clienteDetalles(id: number): Observable<APIRespuesta<Cliente>> {
    return this.http.get<APIRespuesta<Cliente>>(`${env.DIRECCION}cliente-detalle/${id}`)
  }

  crearCliente(datos: any): Observable<Cliente> {
    return this.http.post<Cliente>(`${env.DIRECCION}cliente-crear`, datos)
  }

  actualizarCliente(id: number, datos: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${env.DIRECCION}cliente-actualizar/${id}`, datos)
  }

  borrarCliente(id: number): Observable<any> {
    return this.http.delete(`${env.DIRECCION}cliente-borrar/${id}`)
  }
}
