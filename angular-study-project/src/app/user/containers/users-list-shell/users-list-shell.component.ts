import { Component, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';

import { IUser, UsersService } from '../..';

import { UserItemComponent } from 'src/app/shared';
import { debounceTime, distinctUntilChanged, first, map, Observable, of, Subject, Subscription, switchMap, tap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { MatPaginator } from '@angular/material/paginator';

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
  usersLength: number;
  users$: Observable<IUser[]>;
  filteredUsers$: Observable<IUser[]>;
  usersForPage$: Observable<IUser[]>;
  pageNumberSubj: Subject<number> = new Subject();
  numberItemsForPage = 10;

  @ViewChildren(UserItemComponent)
  private userCards: UserItemComponent[];

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;

  constructor(private usersService: UsersService, private httpService: HttpService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });

    this.httpService.getUsers().pipe(
      tap((users) => this.usersLength = users.length),
      first()
    ).subscribe(users => {
      this.users$ = of(users);
      this.searchForm.get('searchField').setValue(''); // и почему если передать значение пустой строки при инициализации это поля формы, а не здесь, то все перестаёт отрабатывать даже при изменении значения в поле поиска
    });

    this.filteredUsers$ = this.searchForm.get('searchField').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this.usersService.filterUsers(this.users$, value)),
      tap(users => {
        this.filteredUsers$ = of(users);
        this.setPageNumber(0);
        this.paginator.firstPage();
        this.usersLength = users.length;
      })
    );

    this.subscription.add(this.filteredUsers$.subscribe());

    this.usersForPage$ = this.pageNumberSubj.pipe(
      switchMap((page) => {
        return this.filteredUsers$.pipe(map(users => {
          const startIndex = page * this.numberItemsForPage;
          const currentPageLastUserId = startIndex + 9;
          if (users.length <= currentPageLastUserId + 1) {
            return users.slice(startIndex, users.length);
          } else {
            return users.slice(startIndex, startIndex + 10);
          }
        }))
      })
    );
    
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setPageNumber(index: number): void {
    this.pageNumberSubj.next(index);
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
