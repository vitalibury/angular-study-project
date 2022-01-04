import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../..';

@Component({
  selector: 'app-user-company-details',
  templateUrl: './user-company-details.component.html',
  styleUrls: ['./user-company-details.component.scss']
})
export class UserCompanyDetailsComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
