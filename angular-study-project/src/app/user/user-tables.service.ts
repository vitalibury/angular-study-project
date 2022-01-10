import { Injectable } from "@angular/core";
import { map, Observable, Subject, tap } from "rxjs";
import { IUser } from ".";
import { HttpService } from "../services/http.service";

@Injectable({
  providedIn: 'root'
})
export class UserTablesService {

  users$: Observable<IUser[]>;
  private usersLengthSubj = new Subject<number>();
  readonly usersLength$ = this.usersLengthSubj.asObservable();

  constructor(private http: HttpService) {}

  getAllUsers() {
    return this.http.getUsers();
  }

  getAllUsersIfNeeded() {
    if (!this.users$) {
      this.users$ = this.http.getUsers().pipe(
        tap(users => {
          this.usersLengthSubj.next(users.length);
        })
      );
    }
  }

  getCurrentPage(params): Observable<IUser[]> {
    this.getAllUsersIfNeeded();
    return this.users$.pipe(
      map(users => this.sortUsers(users, params.sort, params.sortDirection)),
      map(users => this.selectCurrentPageUsers(users, params.pageIndex, params.pageSize))
    )
  }

  selectCurrentPageUsers(users: IUser[], pageIndex: number, pageSize: number): IUser[] {
    const currentPageStartIndex = pageIndex * pageSize;
    return users.slice(currentPageStartIndex, currentPageStartIndex + pageSize);
  }

  sortUsers(users: IUser[], sortField: string, sortDirection: string): IUser[] {
    if (sortField === 'name') {
      users.sort(function (a, b) {        
        const nameA = `${a.firstName.toLowerCase()} ${a.lastName.toLowerCase()}`;
        const nameB = `${b.firstName.toLowerCase()} ${b.lastName.toLowerCase()}`;
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
    } else if (sortField === 'email') {
      users.sort(function (a, b) {
        const emailA = a.email.toLowerCase();
        const emailB = b.email.toLowerCase();
        if (emailA < emailB)
          return -1
        if (emailA > emailB)
          return 1
        return 0
      })
    } else if (sortField === 'company') {
      users.sort(function (a, b) {
        const companyA = a.company.toLowerCase();
        const companyB = b.company.toLowerCase();
        if (companyA < companyB)
          return -1
        if (companyA > companyB)
          return 1
        return 0
      })
    } else if (sortField === 'age') {
      users.sort(function (a, b) {
        return a.age - b.age;
      })
    }
    if (sortDirection === 'desc') {
      users.reverse();
    }
    return users;
  }

}