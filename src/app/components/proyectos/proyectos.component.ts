import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Proyecto } from 'src/app/services/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  
})
export class ProyectosComponent implements OnInit {

  edicion: boolean = false;
  proyectos: Proyecto[]=[];

  constructor( private servicio:LoginService,
               private datos:DatosService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    this.proyectos = Array.from(this.datos.getProyectos());

  }

}
