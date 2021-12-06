import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, finalize, Observable, of, Subscription } from 'rxjs';
import { IUser, UsersService } from '../..';
import { AddUserComponent } from '../../components/add-user';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})

export class AddUserShellComponent implements OnDestroy {

  formTitle = 'Добавление нового пользователя';
  
  @ViewChild(AddUserComponent)
  private formComponent:AddUserComponent;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private router: Router,
    public route: ActivatedRoute
    ) {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  goToMainPage(): void {
    this.router.navigate(['']);
  }

  submitNewUserForm(): void {
    if (this.formComponent.form.invalid) {
      this.formComponent.form.markAllAsTouched();
    } else {
      const newUser: Observable<IUser> = this.createNewUserObject();
      // this.usersService.addNewUser(newUser).pipe(  // Почему такой вариант не срабатывает?
      //   finalize(() => {
      //     console.log(this)
      //     this.goToMainPage()}
      // ));
      this.subscriptions.add(this.usersService // Работает только при возврате из usersService.addNewUser значения
        .addNewUser(newUser)
        .pipe(delay(2000))
        .subscribe(() => {
          this.goToMainPage();
        }
      ));
    }
  }

  createNewUserObject(): Observable<IUser> {
    let nextId: Number;
    this.subscriptions.add(this.usersService.getUsersNextIndex().subscribe(id => nextId = id));
    const formValue = this.formComponent.form.value;
    const newUser: IUser = {
      id: nextId,
      name: formValue.firstName + formValue.lastName,
      age: formValue.age,
      email: formValue.email,
      activated: true,
      company: formValue.company,
      department: formValue.department,
      gender: formValue.gender,
      vehicle: formValue.vehicle ? formValue.vehicle : 'No Vehicle',
      image: formValue.image ? formValue.image : '../../../assets/no car.png',
    }
    return of(newUser);
  }

}
