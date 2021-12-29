import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../..';

@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.scss']
})
export class UserPersonalDetailsComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
