import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Educacion } from 'src/app/services/datos.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  
})
export class EducacionComponent implements OnInit {
  edicion:boolean = false;
  educacion: Educacion[]=[];

  constructor(  private servicio:LoginService,
                private datos:DatosService,
                private data:DataService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    
    this.data.getIdActivo().then(valor => {
      this.data.getEducacion(valor).then( res => {
        Object.assign(this.educacion, res);


      })
    });
    
  }

}
