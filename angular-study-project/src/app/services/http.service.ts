import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INewUser } from '../auth/auth.interfaces';
import { users } from '../auth/registered-users';
import { IUser } from '../user/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(`${environment.apiUrl}/?inc=gender,name,dob,email,id,location&seed=foobar&results=100`).pipe(
      map((response: any) => {
        return response.results.map(user => {
          return {
            id: user.id.value,
            firstName: user.name.first,
            lastName: user.name.last,
            age: user.dob.age,
            email: user.email,
            gender: user.gender,
            activated: true,
            addresses: [
              {address: user.location.street.name, city: user.location.city, zip: user.location.postcode}
            ]
          }
        });
      })
    );
  }

  addUser(user: IUser): Observable<any> { // Post request example
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

  registerUser(user: INewUser): Observable<INewUser> {
    Object.assign(users, {[user.login]: {login: user.login, password: user.password}});
    const registeredUser = users[user.login];
    return of(registeredUser).pipe(delay(1000));
  }

  signIn(user: INewUser): Observable<any> | Observable<never> {
    const existingUser = users[user.login];
    if (existingUser) {
      return of(existingUser).pipe(delay(1500));
    }
    return throwError(() => new Error('Such user does not exist! Register please!')).pipe(delay(15000));
  }

}
