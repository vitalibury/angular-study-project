import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { exhaustMap, map, Observable, Subject, Subscription } from 'rxjs';
import { UserFormComponent } from 'src/app/shared';
import { LeaveFormPagePopupComponent } from 'src/app/shared/components/leave-form-page-popup/leave-form-page-popup.component';
import { ComponentCanDeactivate } from 'src/app/shared/interfaces/component-can-deactivate';
import { IUser, UsersService } from '../..';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})

export class AddUserShellComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  @ViewChild(UserFormComponent)
  private formComponent: UserFormComponent;

  newUserSubj: Subject<IUser> = new Subject();

  newUserNextId: number;
  formTitle = 'Добавление нового пользователя';

  private subscriptions: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.usersService.getUsersNextId().subscribe(id => this.newUserNextId = id));
    this.subscriptions.add(this.newUserSubj.pipe(
      map((user) => this.createNewUserObject(user)),
      exhaustMap(user => this.usersService.addNewUser(user))
    ).subscribe(() => this.goToMainPage()));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  canDeactivate(): boolean | Observable<boolean> {
    return !this.formComponent.form.dirty;
  };

  openDialog(): boolean | Observable<boolean> {
    const dialogRef = this.dialog.open(LeaveFormPagePopupComponent, {
      data: this.formComponent.changedFields,
      width: '600px'
    });
    return dialogRef.afterClosed()
  }

  goToMainPage(): void {
    this.router.navigate(['']);
  }

  submitNewUserForm(): void {
    if (this.formComponent.form.invalid) {
      this.formComponent.markFormAsChecked();
    } else {
      this.formComponent.form.markAsPristine();
      this.newUserSubj.next(this.formComponent.form.value);
    }
  }

  createNewUserObject(formValue: IUser): IUser {
    // const formValue = this.formComponent.form.value;
    const newUser: IUser = {
      id: this.newUserNextId,
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
    return newUser;
  }

}
