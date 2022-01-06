import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";

@Injectable({
  providedIn: 'root'
})
export class UserTablesService {

  constructor(private http: HttpService) {}

  getAllUsers() {
    return this.http.getUsers();
  }

  getCurrentPage(page: number) {
    return this.http.getSpecificUsersPage(page);
  }

}