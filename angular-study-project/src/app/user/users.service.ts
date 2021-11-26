import { Injectable } from '@angular/core';
import { IUser } from '.';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): IUser[] {
    return this.users;
  }

  private users: IUser[] = [
    { id:0, name: 'Joe', age: 40, activated: false, vehicle: 'Toyota', image: 'https://cdn.carbuzz.com/gallery-images/840x560/511000/200/511268.jpg' },
    {  id:1, name: 'Justin', age: 20, activated: true, vehicle: 'Honda', image: 'https://autowise.com/wp-content/uploads/2018/12/honda-accord-1.jpg' },
    {  id:2, name: 'Robin', age: 35, activated: true, vehicle: 'Nissan', image: 'https://autowise.com/wp-content/uploads/2019/01/nissan-altima-1.jpg' },
    {  id:3, name: 'Mike', age: 15, activated: true, vehicle: 'Trek', image: 'https://ep1.pinkbike.org/p4pb19249314/p4pb19249314.jpg' },
    {  id:4, name: 'Richard', age: 30, activated: true, vehicle: 'Lexus', image: 'https://besthqwallpapers.com/Uploads/15-11-2020/144857/thumb2-lexus-lc-500-4k-road-2020-cars-supercars.jpg' },
    {  id:5, name: 'Jerry', age: 18, activated: true, vehicle: 'Ford', image: 'https://cdni.autocarindia.com/ExtraImages/20180427122731_17fusionsport_05_hr.jpg' },
    {  id:6, name: 'Simon', age: 32, activated: true, vehicle: 'Tesla', image: 'https://ecotechnica.com.ua/images/-foto6/117-top-10-electric-cars-2020-2.jpg' },
    {  id:7, name: 'Bred', age: 27, activated: false, vehicle: 'BMW', image: 'https://carsweek.ru/upload/resize_cache/iblock/c21/870_400_2/c2165f36191cbb93babc69a985536b22.jpg' },
    {  id:8, name: 'Kevin', age: 46, activated: true, vehicle: 'Mercedes', image: 'https://cars.ua/thumb/upload/w933/h622/q80/614d98e8705f99_24750952.jpg' },
    {  id:9, name: 'Peter', age: 17, activated: true, vehicle: 'Energica', image: 'https://www.motorbiscuit.com/wp-content/uploads/2020/04/2020-Energica-Eva-EsseEsse9.jpg' },
    {  id:10, name: 'Adam', age: 25, activated: true, vehicle: 'Volkswagen', image: 'https://parkers-images.bauersecure.com/pagefiles/318288/cut-out/420x280/volkswagen-arteon-01.jpg' }
  ]

}
