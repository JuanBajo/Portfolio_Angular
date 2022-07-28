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
  activo:boolean
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

export interface Educacion{
  id: number,
  institucion: string,
  carrera: string,
  fechaEgreso: string,
  descripcion: string,
}

export interface Skills{
  id: number,
  skill: string,
  valor: number,
}

export interface Proyecto{
  id: number,
  fecha: string,
  nombre: string,
  descripcion:string,
}

export interface Userlogin{
  email: string,
  pass: string,
  token: string,
  status: string,
  
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  /*persona: Persona = {
    id: 1 ,
    nombre: "Juan Manuel",
    apellido: "Olmos",
    domicilio: "Siempre viva 123",
    email: "yo@yo.com",
    url_foto: "url@url.com",
    titulo: "Desarrollador Web Fullstack Junior - Especialista en Logística SAP - Técnico en electricidad y electrónica - Músico y sonidista",
    about: "Entusiasta de la informatica, electronica, sonido y musica. Me gusta aprender cosas nuevas y colaborar en obtener soluciones a cualquier problema.",
    activo: true

  };

  experiencias: Experiencia[]= [
    {
      id: 1,
      empresa: "Electroingenieria S.A.",
      puesto: "Catalogador MM SAP - Admin registro maestro de materiales",
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
];

  carreras: Educacion[]=[
    { 
     id:	1,
     institucion:	"Escuela Industrial n° 4 José Menéndez – Río Gallegos, Santa Cruz, Argentina",
     carrera:	"Técnico en electricidad y electrónica industrial",
     fechaEgreso:	"2001",
     descripcion:	"Completo"
    },
    {    
     id:	2,
     institucion:	"Universidad Tecnológica Nacional, Facultad Regional Córdoba, Argentina",
     carrera:	"Ingeniería Electrónica",
     fechaEgreso:	"2002",
     descripcion:	"Primer año completo"
    },
    { 
     id:	3,
     institucion:	"Universidad Tecnológica Nacional, Facultad Regional Córdoba, Argentina",
     carrera:	"Ingeniería en sistemas de información",
     fechaEgreso:	"2005",
     descripcion:	"Completo 3 años de 5"
    }

  ];

  skills: Skills[]=[
  {
    id: 1,
    skill: "Ingles",
    valor: 70,
  },
  {
    id: 2,
    skill: "Resolucion de problemas",
    valor: 90,
  },
  {
    id: 3,
    skill: "Edicion de audio",
    valor: 50,
  }
  ];
    
  proyectos: Proyecto[]=[
    {
      id: 1,
      fecha: "2021",
      nombre: "Portfolio Personal",
      descripcion: "Portfolio personal realizado como proyecto del curso YoProgramo utilizando Angular y Spring",
    },
    {
      id: 2,
      fecha: "2020",
      nombre: "Sistema de registro de horas y obras - Espacio Ingenieria",
      descripcion: "Desarrollo de un sistema para registrar las horas de ingeniería civil dedicadas a cada obra de la empresa",
    },
    {
      id: 3,
      fecha: "2008",
      nombre: "Creacion de registro maestro de materiales para Electroingenieria S.A.",
      descripcion: "Desarrollo y Gestión del árbol de clasificación de Datos para SAP Master Material Recording: descripción técnica y clasificación de 70.000 materiales para ser utilizados por los departamentos de Ingeniería, Suministro, Logística, Mantenimiento de Equipos y Gestión de Almacenes de más de 30 grandes proyectos de infraestructura y empresas relacionadas con el grupo Electroingenieria ubicado en Argentina, Bolivia, Perú y Venezuela. Tecnologia utilizada SAP R/3",
    }
  ];


  constructor() { 

  }

  
  public getPersona(): Persona{
    return this.persona;
  }

  public getExperiencias(): Experiencia[]{
    return this.experiencias;
  }

  public getEducacion(): Educacion[]{
    return this.carreras;
  }

  public getSkills(): Skills[]{
    return this.skills;
  }

  public getProyectos(): Proyecto[]{
    return this.proyectos;
  }*/
}
