import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Persona } from 'src/app/services/datos.service';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  
})
export class InfoComponent implements OnInit {
  edicion=false;
  nombreCompleto: string='';
  titulo: string='';
  p: Persona = {
   
    id: 0,
    nombre: "",
    apellido: "",
    domicilio: "",
    email: "",
    url_foto: "" ,
    titulo: "",
    about: "",
    activo: false
  
};
  public idActivo: number = 0;
    
  constructor(  private servicio:LoginService, 
                private datos:DatosService,
                private data:DataService
    ) {  }
  
  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => {
      this.edicion=activo;
      
    });

    this.data.getPersona().then(res => {
      Object.assign(this.p,res);
      this.titulo=this.p.titulo;
      this.nombreCompleto=this.p.nombre + " "+ this.p.apellido;


    });
    
    

  }

}
