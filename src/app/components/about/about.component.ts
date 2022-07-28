import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  
})
export class AboutComponent implements OnInit {
  edicion:boolean = false;
  txtAbout: string ='';
  p: any = {};

  constructor(  private servicio:LoginService,
                private data: DataService
    ) { }

  ngOnInit(): void {
    this.servicio.observable$.subscribe (activo => { this.edicion=activo; });
    
   
    
    this.data.getPersona().then( res => this.txtAbout = res.about)
    

  }


}
