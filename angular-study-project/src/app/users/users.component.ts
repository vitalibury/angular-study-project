import { Component, OnInit } from '@angular/core';
import { IUser, users } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[] = users;
  isShowDeactivated: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHideDeactivated() {
    this.isShowDeactivated = !this.isShowDeactivated;
  }

  deactivateUser(user: IUser) {
    console.log('click')
    user.activated = false;
  }

}
