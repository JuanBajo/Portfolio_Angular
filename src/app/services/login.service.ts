import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable()
export class LoginService {
  private edicionActiva:Boolean = false;

  observable$ = new EventEmitter<boolean>();
  
  constructor() { }

public getBtnActivos():Boolean{
  console.log("getbtnactivos");
  return this.edicionActiva;
}

public loginUsuario(){
  console.log("loginusuarioservicio");
  this.observable$.emit(true);
  this.edicionActiva=true;


}

}
