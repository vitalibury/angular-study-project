import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private auth: AuthService) {}
  canLoad(route: Route,
    segments: UrlSegment[]): boolean  | Observable<boolean> | Promise<boolean> {
      if (this.auth.isAuthenticated) {
        return true;
      } else {
        this.auth.logout();
        return false;
      }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated) {
      return true;
    } else {
      this.auth.logout();
      return false;
    }
  }
  
}
