import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, finalize, take } from 'rxjs';
import { INewUser } from '../../auth.interfaces';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {

  loginErrorMessageSubj = new BehaviorSubject('');
  loginBtnDisabledSubj = new BehaviorSubject<boolean>(false);

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(user: INewUser) {
    this.loginBtnDisabledSubj.next(true);
    this.auth.login(user).pipe(
      take(1),
      finalize(() => this.loginBtnDisabledSubj.next(false))
      ).subscribe({
      next: (user) => {
        this.loginErrorMessageSubj.next('');
        this.auth.setAuthentication(user);
        this.router.navigate([''])
      },
      error: (err) => {
        this.loginErrorMessageSubj.next(err.message)
      }
    });
  }
}
