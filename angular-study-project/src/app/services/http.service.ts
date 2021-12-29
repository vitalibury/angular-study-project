import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, dematerialize, map, materialize, Observable, of, throwError } from 'rxjs';
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
    return this.http.get(`${environment.apiUrl}/?seed=foobar&results=100`).pipe(
      map((response: any) => {
        console.log(response)
        return response.results.map((user, index: number) => {
          return {
            id: index,
            firstName: user.name.first,
            lastName: user.name.last,
            age: user.dob.age,
            email: user.email,
            gender: user.gender,
            activated: true,
            addresses: [
              {address: user.location.street.name, city: user.location.city, zip: user.location.postcode}
            ],
            company: index % 2 === 0 ? "ISSoft" : "Coherent Solutions",
            phone: user.phone
          }
        });
      })
    );
  }

  getUserById(id: number): Observable<IUser> {
    return this.getUsers().pipe(
      map(users => users.filter(user => user.id == id)),
      map(userArr => userArr[0])
    )
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
      if (existingUser.password === user.password) {
        return of(existingUser).pipe(delay(1500));
      }
      return  throwError(() => new Error('Invalid password!')).pipe(materialize(), delay(1500), dematerialize());
    }
    return throwError(() => new Error('Such user does not exist! Register please!')).pipe(materialize(), delay(1500), dematerialize());
  }

}
