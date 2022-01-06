import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { constants } from 'src/app/shared/constants';
import { IUser } from '../..';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnChanges {

  pageUsersCount = constants.SERVER_TABLE_PAGE_USERS_COUNT;
  
  displayedColumns: string[] = ['№', 'firstName', 'email', 'age', 'addresses', 'company'];
  dataSource: MatTableDataSource<IUser>;

  @Input() users: IUser[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.users) {
      this.dataSource = new MatTableDataSource(this.users);
      if (!this.dataSource.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (!this.dataSource.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }

}
