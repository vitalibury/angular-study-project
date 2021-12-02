import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';

import { IUser, UsersService } from '../..';

import { UserItemComponent } from 'src/app/shared';
import { map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss']
})
export class UsersListShellComponent implements OnInit, OnDestroy {

  // private destroy$ = new Subject<void>();
  users: IUser[];
  isShowDeactivated: Boolean = true;
  users$: Observable<IUser[]> = this.usersService.users$;
  // users$: Observable<IUser[]> = this.usersService.users$;

  @ViewChildren(UserItemComponent)
  private userCards: UserItemComponent[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    // this.usersService.users$.pipe(takeUntil(this.destroy$)).subscribe(users => {
    //   this.users$ = users
    // });

    // // this.filterUsers();
  }

  ngOnDestroy() {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

  // filterUsers(): void {
  //   this.isShowDeactivated ?
  //   this.users$ = this.usersService.users$ :
  //   this.users$ = this.usersService.users$.pipe(map(users => users.filter(user => user.activated)));
  //   // this.users = this.usersService.getUsers() :
  //   // this.users = this.usersService.getUsers().filter(user => user.activated);
  // }

  showHideDeactivated():void {
    this.isShowDeactivated = !this.isShowDeactivated;
  }

  // changeMode():void {
  //   this.showHideDeactivated();
  //   this.filterUsers();
  // }

  deactivateParticularUser(user: IUser) {
    this.usersService.deactivateParticular(user);
  }

  deactivateAllowedUsers():void {
    this.userCards.forEach(card => card.deactivate(card.user));
  }

  userLog(user: any):void {
    console.log(user);
  }

}
