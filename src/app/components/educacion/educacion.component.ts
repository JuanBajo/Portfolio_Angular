import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Educacion } from 'src/app/services/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  
})
export class EducacionComponent implements OnInit {
  edicion:boolean = false;
  educacion: Educacion[]=[];

  constructor(  private servicio:LoginService,
                private datos:DatosService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    this.educacion=Array.from(this.datos.getEducacion());
    
  }

}
