import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { INewUser } from '../../auth.interfaces';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit {
  
  registrationBtnDisabledSubj = new BehaviorSubject<boolean>(false);

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(user: INewUser): void {
    this.registrationBtnDisabledSubj.next(true);
    this.auth.register(user).pipe(take(1)).subscribe(() => {
      this.registrationBtnDisabledSubj.next(false);
      this.router.navigate(['/auth', 'login']);
    });
  }

}
