import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('canActivate: ' + this.authService.isUserLoggedIn())
    if(this.authService.isUserLoggedIn()) return true

    this.router.navigate(['login'])
    return false
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(RouteGuardService).canActivate(next,state);
}
