import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserShellComponent, EditUserShellComponent, UsersListShellComponent } from '.';
import { AuthGuard } from '../auth/auth.guard';
import { UnsavedFormCheckGuard } from '../shared/guards/unsaved-form-check/unsaved-form-check.guard';
import { UserCompanyDetailsShellComponent } from './containers/user-company-details-shell/user-company-details-shell.component';
import { UserContactDetailsShellComponent } from './containers/user-contact-details-shell/user-contact-details-shell.component';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { UserPersonalDetailsShellComponent } from './containers/user-personal-details-shell/user-personal-details-shell.component';

export const userRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: UsersListShellComponent },
  { path: 'add-user', canDeactivate: [UnsavedFormCheckGuard],  component: AddUserShellComponent },
  { path: 'edit-user/:id', canDeactivate: [UnsavedFormCheckGuard], component: EditUserShellComponent },
  { path: 'details/:id', canActivateChild: [AuthGuard], component: UserDetailsShellComponent, children: [
    { path: '', redirectTo: 'company', pathMatch: 'full' },
    { path: 'company', component: UserCompanyDetailsShellComponent },
    { path: 'personal', component: UserPersonalDetailsShellComponent },
    { path: 'contact', component: UserContactDetailsShellComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
