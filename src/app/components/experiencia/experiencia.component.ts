import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Experiencia } from 'src/app/services/datos.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  
})
export class ExperienciaComponent implements OnInit {

  constructor(  private servicio:LoginService,
                private datos:DatosService  
  ) {
    


   }

  edicion:boolean = false;
  experiencias: Experiencia[]=[];

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => {
      this.edicion=activo;
  
    });
    
    this.experiencias = Array.from(this.datos.getExperiencias());
  
  
  }

}
