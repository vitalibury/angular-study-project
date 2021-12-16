import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, Observable, of, Subscription, switchMap } from 'rxjs';
import { UserFormComponent } from 'src/app/shared';
import { IUser, UsersService } from '../..';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})

export class AddUserShellComponent implements OnDestroy {

  @ViewChild(UserFormComponent)
  private formComponent: UserFormComponent;

  formTitle = 'Добавление нового пользователя';

  private subscriptions: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  goToMainPage(): void {
    this.router.navigate(['']);
  }

  submitNewUserForm(): void {
    if (this.formComponent.form.invalid) {
      console.log(this.formComponent.form)
      // this.formComponent.form.markAllAsTouched();
    } else {
      const newUser = this.createNewUserObject();
      this.usersService.addNewUser(newUser)
        .pipe(first())
        .subscribe(() => this.goToMainPage());
      }
  }

  createNewUserObject(): Observable<IUser> {
    let nextId: number;
    this.subscriptions.add(this.usersService.getUsersNextIndex().subscribe(id => nextId = id));
    const formValue = this.formComponent.form.value;
    const newUser: IUser = {
      id: nextId,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      age: formValue.age,
      email: formValue.email,
      activated: true,
      company: formValue.company,
      department: formValue.department,
      gender: formValue.gender,
      vehicle: formValue.vehicle ? formValue.vehicle : 'No Vehicle',
      image: formValue.image ? formValue.image : '../../../assets/no car.png',
      addresses: formValue.addresses ? formValue.addresses : null
    }
    return of(newUser);
  }

}
