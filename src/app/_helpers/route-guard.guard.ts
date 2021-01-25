import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './../_services/token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  isLoggedIn = false;
  constructor(private token: TokenStorageService, public router:Router) { }

  //isLoggedIn = !!this.token.getToken();
  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if (!(this.token.getUser().roles==='ROLE_ADMIN') || !(this.token.getUser().roles==='ROLE_ROLE_EXTENSION') ||!(this.token.getUser().roles==='ROLE_USER')|| !(this.token.getUser().roles==='ROLE_ROLE_SEEDER')  ) {
       
       
        return true;
      }
      
    return false;
  }
  
}
