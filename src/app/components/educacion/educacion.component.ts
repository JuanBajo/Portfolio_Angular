import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  
})
export class EducacionComponent implements OnInit {
  edicion:boolean = false;

  constructor( private servicio:LoginService ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
  }

}
