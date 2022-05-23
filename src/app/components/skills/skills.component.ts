import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  
})
export class SkillsComponent implements OnInit {
  edicion:boolean = false;

  constructor( private servicio:LoginService ) { }

  ngOnInit(): void {

    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
  }

}
