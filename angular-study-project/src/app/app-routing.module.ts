import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnsavedFormCheckGuard } from './shared/guards/unsaved-form-check/unsaved-form-check.guard';
import { AuthGuard } from './auth/auth.guard';

import { MainLayoutComponent } from './layout';
import { AddUserShellComponent, EditUserShellComponent, UsersListShellComponent } from './user';
import { RxjsComponent } from './rxjs';
import { UserDetailsShellComponent } from './user/containers/user-details-shell/user-details-shell.component';
import { UserCompanyDetailsShellComponent } from './user/containers/user-company-details-shell/user-company-details-shell.component';
import { UserPersonalDetailsShellComponent } from './user/containers/user-personal-details-shell/user-personal-details-shell.component';
import { UserContactDetailsShellComponent } from './user/containers/user-contact-details-shell/user-contact-details-shell.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', canActivate: [AuthGuard], component: UsersListShellComponent },
      { path: 'add-user', canActivate: [AuthGuard], component: AddUserShellComponent },
      { path: 'rxjs', canActivate: [AuthGuard], component: RxjsComponent },
      { path: 'add-user', canActivate: [AuthGuard], canDeactivate:[UnsavedFormCheckGuard], component: AddUserShellComponent },
      { path: 'edit-user/:id', canActivate: [AuthGuard], canDeactivate:[UnsavedFormCheckGuard], component: EditUserShellComponent },
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
      { path: 'details/:id', canActivate: [AuthGuard], component: UserDetailsShellComponent, children: [
        { path: '', redirectTo: 'company', pathMatch: 'full' },
        { path: 'company', component: UserCompanyDetailsShellComponent },
        { path: 'personal', component: UserPersonalDetailsShellComponent },
        { path: 'contact', component: UserContactDetailsShellComponent },
      ] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
