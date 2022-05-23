import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  
})
export class InfoComponent implements OnInit {
  edicion=false;
  nombre: string='';
  titulo: string='';
  constructor(  private servicio:LoginService, 
                private datos:DatosService
    ) {


   }
  
  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => {
      this.edicion=activo;
      console.log("ngoninit info"+this.edicion)
    });

    this.nombre = this.datos.getPersona().nombre + ' ' + this.datos.getPersona().apellido;
    this.titulo = this.datos.getPersona().titulo;
    
    

  }


}
