import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Proyecto } from 'src/app/services/datos.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  
})
export class ProyectosComponent implements OnInit {

  edicion: boolean = false;
  proyectos: Proyecto[]=[];

  constructor( private servicio:LoginService,
               private datos:DatosService,
               private data:DataService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    
    this.data.getIdActivo().then(valor => {
      this.data.getProyectos(valor).then(res => {
        Object.assign(this.proyectos,res)
      })
    })


    } 
    




  }


