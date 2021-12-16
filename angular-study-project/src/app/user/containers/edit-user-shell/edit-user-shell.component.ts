import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable, of, Subscription, switchMap } from 'rxjs';
import { UserFormComponent } from 'src/app/shared';
import { ComponentCanDeactivate } from 'src/app/shared/interfaces/component-can-deactivate';
import { UsersService } from '../..';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit, AfterViewInit, OnDestroy, ComponentCanDeactivate {

  @ViewChild(UserFormComponent)
  private formComponent: UserFormComponent;

  subscription: Subscription = new Subscription();

  user$: Observable<IUser>;

  formTitle = 'Редактирование существующего пользователя';
  formIsDirty = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.user$ = this.usersService.getUserById(this.route.snapshot.params['id']);
  }

  ngAfterViewInit(): void {
    this.subscription.add(this.formComponent.form.valueChanges
      .subscribe(() => this.formIsDirty = true));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  canDeactivate(): boolean | Observable<boolean> {
    return (!this.formIsDirty && !this.formComponent.form.touched);
  };

  submitUserForm(): void {
    this.formIsDirty = false;
    if (this.formComponent.form.invalid) {
      // this.formComponent.form.markAllAsTouched();
      console.log(this.formComponent.form.controls);
    } else {
      this.user$.pipe(
        switchMap(user => {
          const newUser: IUser = { ...user, ...this.formComponent.form.value }
          return this.usersService.updateUser(of(newUser));
        }),
        first()
      )
        .subscribe(() => this.goToMainPage())
    }
  }

  goToMainPage() {
    this.router.navigate(['']);
  }

}
