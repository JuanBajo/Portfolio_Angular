import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Experiencia } from 'src/app/services/datos.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  
})
export class ExperienciaComponent implements OnInit {

  constructor(  private servicio:LoginService,
                private datos:DatosService,
                private data:DataService 
  ) {
    


   }

  edicion:boolean = false;
  experiencias: Experiencia[]=[];

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => {
      this.edicion=activo;
  
    });
    
    this.data.getIdActivo().then(valor =>{  
      this.data.getExperiencias(valor).then( res => {
        Object.assign(this.experiencias, res);

      });
      
    })
      
  
  }

}
