import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTokenService implements CanActivate {

  constructor() { }
  canActivate(): boolean {
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
