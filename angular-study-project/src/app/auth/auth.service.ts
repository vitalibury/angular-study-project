import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { HttpService } from '../services/http.service';
import { constants } from '../shared/constants';
import { INewUser } from './auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedHowSubj = new BehaviorSubject('');
  private authenticated = this.authenticateFromSessionStorage();
  authenticatedHow$ = this.authenticatedHowSubj.asObservable();

  constructor(private router: Router, private http: HttpService) {
    router.events.subscribe(event => this.routerLogger(event))
  }

  get isAuthenticated() {
    return this.authenticated;
  }

  authenticateFromSessionStorage(): boolean {
    const storageUser = sessionStorage.getItem(constants.STUDY_PROJECT_STORAGE_VAR);
    if (storageUser) {
      const userFromString = JSON.parse(storageUser);
      this.http.registerUser(userFromString).pipe(
        take(1)
        ).subscribe(user => this.authenticatedHowSubj.next(user.login));
      return true;
    }
    return false;
  }

  setStorageUser(storageUser: INewUser): void {
    const userString = JSON.stringify(storageUser);
    sessionStorage.setItem(constants.STUDY_PROJECT_STORAGE_VAR, userString);
  }

  deleteStorageUser() {
    sessionStorage.clear();
  }

  setAuthentication(user: INewUser) {
    if (user) {
      this.authenticated = true;
      this.authenticatedHowSubj.next(user.login);
      this.setStorageUser(user);
    } else {
      this.authenticated = false;
      this.authenticatedHowSubj.next('');
      this.deleteStorageUser();
    }
  }

  register(user: INewUser): Observable<INewUser> {
    return this.http.registerUser(user);
  }

  logout(): void {
    this.setAuthentication(null);
    this.router.navigate(['/auth', 'login']);
  }

  login(user: INewUser): Observable<INewUser> {
    return this.http.signIn(user);  // .pipe(catchError(this.handleError.bind(this)))
  }

  // handleError(error) {
  //   console.log(error);
  // }

  routerLogger(event): void {
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd: ', event.url);
    }
    if (event instanceof NavigationStart) {
      console.log('NavigationStart: ', event.url);
    }
  }
}
