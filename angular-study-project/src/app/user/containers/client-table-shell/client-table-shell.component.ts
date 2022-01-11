import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../..';
import { UserTablesService } from '../../user-tables.service';

@Component({
  selector: 'app-client-table-shell',
  templateUrl: './client-table-shell.component.html',
  styleUrls: ['./client-table-shell.component.scss']
})
export class ClientTableShellComponent implements OnInit {
  
  users$: Observable<IUser[]>;

  constructor(private tableService: UserTablesService) { }

  ngOnInit(): void {
    this.users$ = this.tableService.getAllUsers();
  }

}
