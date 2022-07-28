import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from './data.service';
import { Userlogin } from './datos.service';

@Injectable()
export class LoginService {
  private edicionActiva: Boolean = false;

  observable$ = new EventEmitter<boolean>();

  constructor(
                private data:DataService,
                
  ) {}

  public getBtnActivos(): Boolean {
    console.log('getbtnactivos');
    return this.edicionActiva;
  }

  public loginUsuario() {
    console.log('loginusuarioservicio');

    this.data.login("jmolmos","pass").then( res =>{
      let usrRes: Userlogin = {
        email: "",
        pass: "",
        token: "",
        status: ""
        
      };
      console.log(res);
      
      Object.assign(usrRes,res)
      sessionStorage.setItem("token", usrRes.token);
      this.observable$.emit(true);
      this.edicionActiva = true;
      
    })


  }


}
