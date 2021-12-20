import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../user/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(`${environment.apiUrl}/?inc=gender,name,dob,email,id,location&seed=foobar&results=100`).pipe(
      map((response: any) => {
        console.log(response)
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

  addUser(user: IUser): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

}
