import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IUser } from '../..';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerTableComponent implements OnChanges {

  displayedColumns: string[] = ['№', 'firstName', 'email', 'age', 'addresses', 'company'];
  dataSource: MatTableDataSource<IUser>;

  @Input() users: IUser[];
  @Input() isLoading$: Observable<boolean>;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.users) {
      this.dataSource = new MatTableDataSource(this.users);
      if (!this.dataSource.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }

}
