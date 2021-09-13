export interface Cliente {
  id: number
  nombre: string
  direccion: string
  telefono: string
  ci: string
  status: string
}

export interface APIRespuesta<T> {
  datos: Array<T>
}