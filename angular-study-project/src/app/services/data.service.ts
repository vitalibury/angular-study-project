import { Injectable } from '@angular/core';

export interface Person {
  name: String,
  job: String,
  age: Number,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts: Person[] = [
    {name: 'Joe', job: 'engineer', age: 40},
    {name: 'Justin', job: 'worker', age: 20},
    {name: 'Robin', job: 'driver', age: 35},
    {name: 'Mike', job: 'pilot', age: 30},
    {name: 'Adam', job: 'admin', age: 25},
  ];

  constructor() { }
}
