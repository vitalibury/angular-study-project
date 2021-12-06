import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() isShowDeactivated: Boolean;
  @Output() changeMode = new EventEmitter();
  @Output() deactivateAllowedUsers = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callChangeMode(): void {
    this.changeMode.emit(true);
  }

  callAllDeactivation():void {
    this.deactivateAllowedUsers.emit(true);
  }

}
