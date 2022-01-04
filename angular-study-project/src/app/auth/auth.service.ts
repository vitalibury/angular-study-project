import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { HttpService } from '../services/http.service';
import { SessionStorage } from '../services/local-storage.service';
import { INewUser } from './auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedHowSubj = new BehaviorSubject('');
  private authenticated = this.authenticateFromSessionStorage();
  authenticatedHow$ = this.authenticatedHowSubj.asObservable();

  constructor(private router: Router, private http: HttpService, private storage: SessionStorage) {}

  get isAuthenticated() {
    return this.authenticated;
  }

  authenticateFromSessionStorage(): boolean {
    const storageUser = this.storage.getStorageUser();
    if (storageUser) {
      const userFromString = JSON.parse(storageUser);
      this.http.registerUser(userFromString).pipe(
        take(1)
        ).subscribe(user => this.authenticatedHowSubj.next(user.login));
      return true;
    }
    return false;
  }

  setAuthentication(user: INewUser) {
    if (user) {
      this.authenticated = true;
      this.authenticatedHowSubj.next(user.login);
      this.storage.setStorageUser(user);
    } else {
      this.authenticated = false;
      this.authenticatedHowSubj.next('');
      this.storage.deleteStorageUser();
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

}
