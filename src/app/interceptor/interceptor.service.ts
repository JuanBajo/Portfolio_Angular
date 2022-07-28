import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = sessionStorage.getItem('token');
    if (token == null) {
      token = '0';
    }
    let headers = new HttpHeaders({ "Authorization": token, "Access-Control-Allow-Origin": "*", "Content-Type":"application/json" });
    let reqClone = req.clone({headers});

    
    return next.handle(reqClone);
  }
}
