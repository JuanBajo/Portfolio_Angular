import { Injectable } from '@angular/core';

export interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  domicilio: string;
  email: string;
  foto: string;
  titulo: string;
  about: string;
  activo: boolean;
}

export interface Experiencia {
  id: number;
  empresa: string;
  puesto: string;
  fechaInicio: string;
  fechaFin?: string;
  ciudad: string;
  persona_id: number;
}

export interface Educacion {
  id: number;
  institucion: string;
  carrera: string;
  fechaEgreso: string;
  descripcion: string;
  persona_id: number;
}

export interface Skills {
  id: number;
  skill: string;
  valor: number;
  persona_id: number;
}

export interface Proyecto {
  id: number;
  fecha: string;
  nombre: string;
  descripcion: string;
  persona_id: number;
}

export interface Userlogin {
  email: string;
  pass: string;
  token: string;
  status: string;
  codStatus: number;
}

@Injectable({
  providedIn: 'root',
})
export class DatosService {}
