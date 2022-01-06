import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, finalize, Observable, Subject, switchMap, tap } from 'rxjs';
import { constants } from 'src/app/shared/constants';
import { IUser } from '../..';
import { UserTablesService } from '../../user-tables.service';

@Component({
  selector: 'app-server-table-shell',
  templateUrl: './server-table-shell.component.html',
  styleUrls: ['./server-table-shell.component.scss']
})
export class ServerTableShellComponent implements OnInit, AfterViewInit {
  
  usersCount = constants.MAX_USERS_COUNT;
  pageUsersCount = constants.SERVER_TABLE_PAGE_USERS_COUNT;

  private isLoadingSubj = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this.isLoadingSubj.asObservable();

  users$: Observable<IUser[]>;
  currentPage$ = new Subject<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private tableService: UserTablesService) { }
  
  ngOnInit(): void {
    this.users$ = this.currentPage$.pipe(
      tap(() => this.isLoadingSubj.next(true)),
      switchMap((page) => this.tableService.getCurrentPage(page)),
      finalize(() => this.isLoadingSubj.next(false))
    )
  }

  ngAfterViewInit(): void {
    this.currentPage$.next(this.paginator.pageIndex + 1);
  }

  setPageNumber(index: number): void {
    this.currentPage$.next(index + 1);
  }

}
