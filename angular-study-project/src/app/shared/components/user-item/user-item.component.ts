import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, UsersService } from 'src/app/user';
import { constants } from '../../constants';

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

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  deactivate(user: IUser): void {
    // if (user.age >= constants.MIN_AGE_FOR_DEACTIVATION) {
    //   user.activated = false;
    // }
    this.deactivateUser.emit(user);
  }

  log(user: IUser): void {
    this.userLog.emit(user);
  }

  goToEditPage() {
    this.router.navigate(['/edit-user', this.user.id])
  }

  goToDetailsPage() {
    this.router.navigate(['/details', this.user.id])
  }

}
