import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Persona } from 'src/app/services/datos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  
})
export class AboutComponent implements OnInit {
  edicion:boolean = false;
  txtAbout: string ='';
  constructor(  private servicio:LoginService,
                private datos:DatosService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    this.txtAbout = this.datos.getPersona().about;

  }

}
