import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';

import { IUser, UsersService } from '../..';

import { UserItemComponent } from 'src/app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss']
})
export class UsersListShellComponent implements OnInit, OnDestroy {

  users: IUser[];
  isShowDeactivated: Boolean = true;
  users$: Observable<IUser[]> = this.usersService.users$;

  @ViewChildren(UserItemComponent)
  private userCards: UserItemComponent[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  showHideDeactivated():void {
    this.isShowDeactivated = !this.isShowDeactivated;
  }

  deactivateParticularUser(user: IUser): void {
    this.usersService.deactivateParticular(user);
  }

  deactivateAllowedUsers():void {
    this.userCards.forEach(card => card.deactivate(card.user));
  }

  userLog(user: any):void {
    console.log(user);
  }

}
