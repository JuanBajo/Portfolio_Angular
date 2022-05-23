import { Injectable } from '@angular/core';


export interface Persona{
  id: number,
  nombre: string,
  apellido: string,
  domicilio: string,
  email: string,
  url_foto: string,
  titulo: string,
  about: string,
}

export interface Experiencia {
    id: number,
    empresa: string,
    puesto: string,
    fechaInicio: string,
    fechaFin?: string,
    esActual: boolean,
    ciudad: string,

}


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  persona: Persona = {
    id: 1 ,
    nombre: "Juan Manuel",
    apellido: "Olmos",
    domicilio: "Siempre viva 123",
    email: "yo@yo.com",
    url_foto: "url@url.com",
    titulo: "Desarrollador Web Fullstack Junior - Especialista en Logística SAP - Técnico en electricidad y electrónica - Músico y sonidista",
    about: "Entusiasta de la informatica, electronica, sonido y musica. Me gusta aprender cosas nuevas y colaborar en obtener soluciones a cualquier problema."

  }

  experiencias: Experiencia[]= [
    {
      id: 1,
      empresa: "Electroingenieria S.A.",
      puesto: "Administrador de maestro de materiales",
      fechaInicio: "2007-11-01",
      fechaFin: "2018-11-01",
      esActual: false,
      ciudad: "Córdoba - Argentina",
    },
    {
      id: 2,
      empresa: "Digame Licenciado",
      puesto: "Bajista y sonidista",
      fechaInicio: "2006-02-01",
      fechaFin: "2022-05-23",
      esActual: true,
      ciudad: "Córdoba - Argentina",
    }
]

  


  constructor() { 

  }

  
  public getPersona(): Persona{
    return this.persona;
  }

  public getExperiencias(): Experiencia[]{
 
    console.log(this.experiencias[1].fechaFin);
    return this.experiencias;
  }


}
