import { Component, OnInit, ViewChildren } from '@angular/core';

import { IUser, UsersService } from '../..';

import { UserItemComponent } from 'src/app/shared';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss']
})
export class UsersListShellComponent implements OnInit {

  users: IUser[];
  isShowDeactivated: Boolean = true;

  @ViewChildren(UserItemComponent)
  private userCards: UserItemComponent[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.filterUsers();
  }

  filterUsers(): void {
    this.isShowDeactivated ?
    this.users = this.usersService.getUsers() :
    this.users = this.usersService.getUsers().filter(user => user.activated);
  }

  showHideDeactivated():void {
    this.isShowDeactivated = !this.isShowDeactivated;
  }

  changeMode():void {
    this.showHideDeactivated();
    this.filterUsers();
  }

  deactivateAllowedUsers():void {
    this.userCards.forEach(card => card.deactivate(card.user));
  }

  userLog(user: any):void {
    console.log(user);
  }

}
