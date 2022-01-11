import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap, tap } from 'rxjs';
import { IUser } from '../..';
import { UserTablesService } from '../../user-tables.service';

@Component({
  selector: 'app-server-table-shell',
  templateUrl: './server-table-shell.component.html',
  styleUrls: ['./server-table-shell.component.scss']
})
export class ServerTableShellComponent implements OnInit {

  private isLoadingSubj = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this.isLoadingSubj.asObservable();

  users$: Observable<IUser[]>;
  usersLength$: Observable<number>;
  currentPageSubj = new Subject<any>();

  constructor(private tableService: UserTablesService) { }

  ngOnInit(): void {
    this.users$ = this.currentPageSubj.pipe(
      tap(() => this.isLoadingSubj.next(true)),
      switchMap((params) => this.tableService.getCurrentPage(params)),
      tap(() => this.isLoadingSubj.next(false))
    );

    this.usersLength$ = this.tableService.usersLength$;
  }

  setCurrentPage(pageParams): void {
    console.log(pageParams)
    this.currentPageSubj.next(pageParams);
  }

}
