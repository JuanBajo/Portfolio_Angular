import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  
})
export class ProyectosComponent implements OnInit {

  edicion:boolean = false;
  constructor( private servicio:LoginService ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });

  }

}
