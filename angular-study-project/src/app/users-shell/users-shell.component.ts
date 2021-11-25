import { Component, ViewChildren } from '@angular/core';
import { UserItemComponent } from '../shared/user-item/user-item.component';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent {

  users: IUser[];
  isShowDeactivated: Boolean = true;

  @ViewChildren(UserItemComponent)
  private userCards: UserItemComponent[];

  constructor(private usersService: UsersService) {
    this.filterUsers();
  }

  filterUsers(): void {
    this.isShowDeactivated ? this.users = this.usersService.users : this.users = this.usersService.users.filter(user => user.activated);
  }

  showHideDeactivated():void {
    this.isShowDeactivated = !this.isShowDeactivated;
  }

  changeMode():void {
    this.showHideDeactivated();
    this.filterUsers();
  }

  deactivateUser(user: IUser):void {
    this.users.forEach(item => {
      if (item.id === user.id) {
        item.age >= 18 ? item.activated = false : undefined;
      }
    });
    this.filterUsers();
  }

  deactivateAllowedUsers():void {
    this.userCards.forEach(card => card.deactivate(card.user));
  }

  userLog(user: any):void {
    console.log(user);
  }

}
