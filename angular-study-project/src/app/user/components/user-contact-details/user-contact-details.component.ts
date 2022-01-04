import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../..';

@Component({
  selector: 'app-user-contact-details',
  templateUrl: './user-contact-details.component.html',
  styleUrls: ['./user-contact-details.component.scss']
})
export class UserContactDetailsComponent implements OnInit {

  @Input() user: IUser

  constructor() { }

  ngOnInit(): void {
  }

}
