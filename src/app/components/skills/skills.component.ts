import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Skills } from 'src/app/services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  
})
export class SkillsComponent implements OnInit {
  edicion:boolean = false;
  skills: Skills[]=[];
  constructor(  private servicio:LoginService, 
                private datos:DatosService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    this.skills=Array.from(this.datos.getSkills());
  }

}
 function mostrar(){
  console.log("clciked")
}