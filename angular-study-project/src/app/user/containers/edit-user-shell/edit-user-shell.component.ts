import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { exhaustMap, finalize, map, Observable, Subject, Subscription } from 'rxjs';
import { UserFormComponent } from 'src/app/shared';
import { LeaveFormPagePopupComponent } from 'src/app/shared/components/leave-form-page-popup/leave-form-page-popup.component';
import { ComponentCanDeactivate } from 'src/app/shared/interfaces/component-can-deactivate';
import { UsersService } from '../..';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  @ViewChild(UserFormComponent)
  private formComponent: UserFormComponent;

  newUserSubj: Subject<IUser> = new Subject();
  subscription: Subscription = new Subscription();

  user$: Observable<IUser>;

  formTitle = 'Редактирование существующего пользователя';
  formIsDirty = false;  
  isSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.user$ = this.usersService.getUserById(this.route.snapshot.params['id']);
    this.subscription.add(this.newUserSubj.pipe(
      exhaustMap(newUser => this.user$.pipe(map(user => ({...user, ...newUser})))),
      exhaustMap(user => this.usersService.updateUser(user)),
      finalize(() => this.isSubmitted = false)
    ).subscribe(() => {
      this.goToMainPage();
    }));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (this.formComponent.form.dirty) {
      const dialogRef = this.dialog.open(LeaveFormPagePopupComponent, {
        data: this.formComponent.changedFields,
        width: '600px'
      });
      return dialogRef.afterClosed()
    }
    return true;
  };

  submitUserForm(): void {
    this.formIsDirty = false;
    if (this.formComponent.form.invalid) {
      this.formComponent.markFormAsChecked();
    } else {
      this.isSubmitted = true;
      this.formComponent.form.markAsPristine();
      this.newUserSubj.next(this.formComponent.form.value);
    }
  }

  goToMainPage() {
    this.router.navigate(['']);
  }

}
