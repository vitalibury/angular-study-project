import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserShellComponent, EditUserShellComponent } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UnsavedFormCheckGuard implements CanDeactivate<EditUserShellComponent | AddUserShellComponent> {

  canDeactivate(
    component: EditUserShellComponent | AddUserShellComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      return true;
    }       
      return component.openDialog();
  }
  
}
