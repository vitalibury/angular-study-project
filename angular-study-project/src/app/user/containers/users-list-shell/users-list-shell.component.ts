import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';

import { IUser, UsersService } from '../..';

import { UserItemComponent } from 'src/app/shared';
import { debounceTime, distinctUntilChanged, EMPTY, first, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss']
})
export class UsersListShellComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  searchForm: FormGroup;
  users: IUser[];
  isShowDeactivated: Boolean = true;
  users$: Observable<IUser[]>;

  @ViewChildren(UserItemComponent)
  private userCards: UserItemComponent[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
    this.searchForm = new FormGroup({
      searchField: new FormControl('')
    });

    this.subscription.add(this.searchForm.get('searchField').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(value => {
        if (value) {
          this.users$ = this.usersService.filterUsers(value.trim().toLowerCase());
        } else {
          this.users$ = this.usersService.getUsers() as Observable<IUser[]>;
        }
      })
    ).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showHideDeactivated(): void {
    this.isShowDeactivated = !this.isShowDeactivated;
  }

  deactivateParticularUser(user: IUser): void {
    this.usersService.deactivateParticular(user);
  }

  deactivateAllowedUsers(): void {
    this.userCards.forEach(card => card.deactivate(card.user));
  }

  userLog(user: any): void {
    console.log(user);
  }

}
