import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export default class HttpInterceptorAuthService implements HttpInterceptor{

  constructor(private authService: AuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = this.authService.getAuthenticatedUser()
    let tokenString = this.authService.getAuthToken()

    if(username && tokenString){
      req = req.clone({
        setHeaders: {
          Authorization: tokenString
        }
      })
    }

    return next.handle(req)
  }
}
