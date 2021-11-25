import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent implements OnInit {

  @Input() user: IUser;
  @Output() userLog = new EventEmitter<IUser>();
  @Output() deactivateUser = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  deactivate(user: IUser): void {
    this.deactivateUser.emit(user);
  }

  log(user: IUser): void {
    this.userLog.emit(user);
  }

}
