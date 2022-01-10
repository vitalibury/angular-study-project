import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { IUser } from '../..';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerTableComponent implements OnInit, OnChanges, AfterViewInit {

  displayedColumns: string[] = ['#', 'firstName', 'email', 'age', 'addresses', 'company'];
  pageSizeOptions: number[] = [10, 20];
  dataSource: MatTableDataSource<IUser>;

  @Input() users: IUser[];
  @Input() isLoading: boolean;
  @Input() usersLength: number;
  @Output() onPageChanged = new EventEmitter();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.users) {
      this.dataSource.data = this.users;
    }
  }

  ngAfterViewInit(): void {
    this.onPageChanged.emit(this.getCurrentPageParams());
    merge(this.sort.sortChange, this.paginator.page).subscribe(() => {
      this.onPageChanged.emit(this.getCurrentPageParams())
    })
  }

  getCurrentPageParams(): { sort: string, sortDirection: string, pageIndex: number, pageSize: number } {
    return {
      sort: this.sort.active,
      sortDirection: this.sort.direction,
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    }
  }

}