import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Educacion,
  Experiencia,
  Persona,
  Proyecto,
  Skills,
  Userlogin,
} from './datos.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private idActivo: number = 0;
  private p: Persona = {
    id: 25,
    nombre: '',
    apellido: '',
    domicilio: '',
    email: '',
    url_foto: '',
    titulo: '',
    about: '',
    activo: false,
  };

  constructor(private http: HttpClient) {}

  Url = 'http://localhost:8080';

  public async getIdActivo(): Promise<number> {
    return await new Promise((resolve, reject) => {
      this.http
        .get<number>(this.Url + '/id_activo')
        .subscribe((res) => resolve(res));
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

  public async login(username: string, pass: string): Promise<string> {
    let userLogin: Userlogin = {
      email: username,
      pass: pass,
      token: "",
      status: ""
      
    };

    let body: String = JSON.stringify(userLogin);
    return await new Promise((resolve, reject) => {
      this.http
        .post<string>(this.Url + '/login', body)
        .subscribe((res) => resolve(res));
    });
  }
}
