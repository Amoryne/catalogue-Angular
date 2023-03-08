import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from './components/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private loginService: LoginService,
              private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
const token = this.loginService.getToken();
if (token) {
return true;
} else {
this.router.navigateByUrl('/');
return false;
}
}
}