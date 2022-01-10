import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { constants } from 'src/app/shared/constants';
import { IUser } from '../..';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientTableComponent implements OnInit, OnChanges, AfterViewInit {

  pageUsersCount = constants.SERVER_TABLE_PAGE_USERS_COUNT;
  
  displayedColumns: string[] = ['#', 'name', 'email', 'age', 'addresses', 'company'];
  dataSource: MatTableDataSource<IUser>;

  @Input() users: IUser[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item, prop) => {
      switch(prop) {
        case 'name': return `${item.firstName} ${item.lastName}`;
        default: return item[prop];
      }
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.users) {
      this.dataSource.data = this.users;
    }
  }

}
