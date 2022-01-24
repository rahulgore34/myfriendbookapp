import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private loginService: LoginService, private router: Router) {}


  canLoad(): boolean | Promise<any> {
      
    return this.loginService.isLoggedIn() ? true : this.router.navigate(['/login']);
  }
  
}
