import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

import {
  Educacion,
  Experiencia,
  Persona,
  Proyecto,
  Skills,
  Userlogin,
} from './modelos.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private idActivo: number = 0;
  private edicionActiva: Boolean = false;
  private Url = 'http://localhost:8080';

  // Observables para comunicacion entre componentes
  observable$ = new EventEmitter<boolean>();
  txtBtnLogEmitter = new EventEmitter<string>();
  lblUsrEmitter = new EventEmitter<string>();
  actualizarDatos$ = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  // METODOS GET PARA OBTENER DATOS DE BD AL INICIAR LA APP Y RENDERIZAR

  public getBtnActivos(): Boolean {
    return this.edicionActiva;
  }

  public async getIdActivo(): Promise<number> {
    return await new Promise((resolve, reject) => {
      this.http.get<number>(this.Url + '/id_activo').subscribe((res) => {
        resolve(res);
      });
    });
  }

  public async getPersona(): Promise<Persona> {
    return await new Promise((resolve, reject) => {
      this.http.get<Persona>(this.Url + '/ver_activo').subscribe((res) => {
        resolve(res);
      });
    });
  }

  public async getExperiencias(id: number): Promise<Experiencia> {
    return await new Promise((resolve, reject) => {
      this.http
        .get<Experiencia>(this.Url + '/ver_experiencias/' + id)
        .subscribe((res) => {
          resolve(res);
        });
    });
  }

  public async getEducacion(id: number): Promise<Educacion> {
    return await new Promise((resolve, reject) => {
      this.http
        .get<Educacion>(this.Url + '/ver_educacion/' + id)
        .subscribe((res) => {
          resolve(res);
        });
    });
  }

  public async getSkills(id: number): Promise<Skills> {
    return await new Promise((resolve, reject) => {
      this.http.get<Skills>(this.Url + '/ver_skills/' + id).subscribe((res) => {
        resolve(res);
      });
    });
  }

  public async getProyectos(id: number): Promise<Proyecto> {
    return await new Promise((resolve, reject) => {
      this.http
        .get<Proyecto>(this.Url + '/ver_proyectos/' + id)
        .subscribe((res) => {
          resolve(res);
        });
    });
  }

  // METODOS DE LOGIN PARA AUTENTICARSE EN EL BACKEND
  public async login(username: string, pass: string): Promise<string> {
    let userLogin: Userlogin = {
      email: username,
      pass: pass,
      token: '',
      status: '',
      codStatus: 0,
    };

    let body: String = JSON.stringify(userLogin);

    return await new Promise((resolve, reject) => {
      this.http
        .post<string>(this.Url + '/login', body)
        .subscribe((res) => resolve(res));
    });
  }

  public async loginUsuario(email: string, pass: string) {
    let usrRes: Userlogin = {
      email: '',
      pass: '',
      token: '',
      status: '',
      codStatus: 0,
    };

    this.login(email, pass).then((res) => {
      Object.assign(usrRes, res);

      if (usrRes.codStatus == 1) {
        sessionStorage.setItem('token', usrRes.token);
        sessionStorage.setItem('currentUser', usrRes.email);
        this.txtBtnLogEmitter.emit('Logout');
        this.lblUsrEmitter.emit(usrRes.email);
        this.observable$.emit(true);
        this.edicionActiva = true;
        Swal.fire('', usrRes.status, 'success');
      } else {
        Swal.fire('', usrRes.status, 'error');
      }
    });
  }

  public logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    this.observable$.emit(false);
    this.edicionActiva = false;
    Swal.fire('Se ha finalizado la sesión', '', 'success');
  }

  //METODOS DE ABM

  public async guardarDatos(endpoint: string, body: string) {
    return await new Promise((resolve, reject) => {
      this.http.post<any>(this.Url + endpoint, body).subscribe((res) => {
        resolve(res);
        this.actualizarDatos$.emit(true);
      });
    });
  }

  public async borrarDatos(endpoint: string, id: number): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.delete(this.Url + endpoint + id).subscribe((res) => {
        resolve(res);
      });
    });
  }
}
