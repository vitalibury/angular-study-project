import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnsavedFormCheckGuard } from './shared/guards/unsaved-form-check/unsaved-form-check.guard';

import { MainLayoutComponent } from './layout';
import { AddUserShellComponent, EditUserShellComponent, UsersListShellComponent } from './user';
import { RxjsComponent } from './rxjs';
import { AuthGuard } from './auth/auth.guard';

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
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
