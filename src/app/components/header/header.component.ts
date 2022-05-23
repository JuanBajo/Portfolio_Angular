import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {
  txtLogBtn: string;
  constructor( public modal:NgbModal,
               public servicio:LoginService,
               
    ) { 
      this.txtLogBtn = 'Login';
      

  }

  ngOnInit(): void {
   
  }
  public login(){
    this.servicio.loginUsuario();
    this.txtLogBtn='Logout';
    console.log(this.servicio.getBtnActivos());
    this.modal.dismissAll();

  }

}

