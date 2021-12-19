import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IUser } from '.';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: IUser[] = [
    { id: 0, firstName: 'Joe', lastName: 'Garcia', age: 40, email: 'Joe-40@gmail.com', gender: 'Male', activated: false, vehicle: 'Toyota', image: 'https://cdn.carbuzz.com/gallery-images/840x560/511000/200/511268.jpg', addresses: [{ address: '5 Avenue', city: 'Boston', zip: 23234 }] },
    { id: 1, firstName: 'Justin', lastName: 'White', age: 20, email: 'Justin-20@gmail.com', activated: true, vehicle: 'Honda', image: 'https://autowise.com/wp-content/uploads/2018/12/honda-accord-1.jpg' },
    { id: 2, firstName: 'Robin', lastName: 'Williams', age: 35, email: 'Robin-35@gmail.com', activated: true, vehicle: 'Nissan', image: 'https://autowise.com/wp-content/uploads/2019/01/nissan-altima-1.jpg' },
    { id: 3, firstName: 'Mike', lastName: 'Johnson', age: 15, email: 'Mike-15@gmail.com', activated: true, vehicle: 'Trek', image: 'https://ep1.pinkbike.org/p4pb19249314/p4pb19249314.jpg' },
    { id: 4, firstName: 'Richard', lastName: 'Brown', age: 30, email: 'Richard-30@gmail.com', activated: true, vehicle: 'Lexus', image: 'https://besthqwallpapers.com/Uploads/15-11-2020/144857/thumb2-lexus-lc-500-4k-road-2020-cars-supercars.jpg' },
    { id: 5, firstName: 'Jerry', lastName: 'Wilson', age: 18, email: 'Jerry-18@gmail.com', activated: true, vehicle: 'Ford', image: 'https://cdni.autocarindia.com/ExtraImages/20180427122731_17fusionsport_05_hr.jpg' },
    { id: 6, firstName: 'Simon', lastName: 'Taylor', age: 32, email: 'Simon-32@gmail.com', activated: true, vehicle: 'Tesla', image: 'https://ecotechnica.com.ua/images/-foto6/117-top-10-electric-cars-2020-2.jpg' },
    { id: 7, firstName: 'Bred', lastName: 'Thompson', age: 27, email: 'Bred-27@gmail.com', activated: false, vehicle: 'BMW', image: 'https://carsweek.ru/upload/resize_cache/iblock/c21/870_400_2/c2165f36191cbb93babc69a985536b22.jpg' },
    { id: 8, firstName: 'Kevin', lastName: 'Smith', age: 46, email: 'Kevin-46@gmail.com', activated: true, vehicle: 'Mercedes', image: 'https://cars.ua/thumb/upload/w933/h622/q80/614d98e8705f99_24750952.jpg' },
    { id: 9, firstName: 'Peter', lastName: 'Miller', age: 17, email: 'Peter-17@gmail.com', activated: true, vehicle: 'Energica', image: 'https://www.motorbiscuit.com/wp-content/uploads/2020/04/2020-Energica-Eva-EsseEsse9.jpg' },
    { id: 10, firstName: 'Adam', lastName: 'Jones', age: 25, email: 'Adam-25@gmail.com', activated: true, vehicle: 'Volkswagen', image: 'https://parkers-images.bauersecure.com/pagefiles/318288/cut-out/420x280/volkswagen-arteon-01.jpg' }
  ];

  constructor() { }

  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<IUser> {
    return this.getUsers().pipe(map(users => users.find(user => user.id == id)), delay(2000));
  }

  filterUsers(value: string): Observable<IUser[]> {
    return this.getUsers().pipe(
      map(users => {
        return users.filter(user => user.firstName.toLowerCase().includes(value)
          || user.lastName.toLowerCase().includes(value))
      })
    );
  }

  getUsersNextId(): Observable<number> {
    return of(this.users.length);
  }

  addNewUser(user: IUser): Observable<number> {
    return this.getUsers().pipe(map(users => users.push(user)), delay(2000));
  }

  updateUser(newUser: IUser): Observable<IUser> {
    return this.getUserById(newUser.id).pipe(map(user => Object.assign(user, newUser)));
  }

  deactivateParticular(user: IUser): Observable<void> {
    const userIndex = this.users.findIndex(u => u.id === user.id);
    this.users.splice(userIndex, 1, user);
    return of();
  }

  isEmailExist(email: String): Observable<Boolean> {
    const existence = this.users.findIndex(user => user.email === email) !== -1 ? true : false;
    return of(existence);
  }

}
