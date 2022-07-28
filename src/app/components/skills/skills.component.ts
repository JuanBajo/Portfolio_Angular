import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DatosService, Skills } from 'src/app/services/datos.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  
})
export class SkillsComponent implements OnInit {
  edicion:boolean = false;
  public skills: Skills[]=[];
  constructor(  private servicio:LoginService, 
                private datos:DatosService,
                private data:DataService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    
    this.data.getIdActivo().then(valor => {
      this.data.getSkills(valor).then(res => {
        Object.assign(this.skills,res);
      })
    })


  }

}
