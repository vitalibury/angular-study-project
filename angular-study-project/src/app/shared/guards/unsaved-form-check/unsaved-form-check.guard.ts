import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserShellComponent } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UnsavedFormCheckGuard implements CanDeactivate<EditUserShellComponent> {

  canDeactivate(
    component: EditUserShellComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      return true;
    }else {      
      return confirm('You have unsaved changes. Are you sure you want leave?');
    }
  }
  
}
