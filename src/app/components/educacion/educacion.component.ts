import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  
})
export class EducacionComponent implements OnInit {
  edicion:boolean = false;
  educacion: Educacion[]=[];

  constructor(  private data:DataService
    ) { }

  ngOnInit(): void {
    this.data.observable$.subscribe (activo => { this.edicion=activo; });
    
    this.data.getIdActivo().then(valor => {
      this.data.getEducacion(valor).then( res => {
        Object.assign(this.educacion, res);


      })
    });
    
  }

}
