import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout';
import { UnsavedFormCheckGuard } from './shared/guards/unsaved-form-check/unsaved-form-check.guard';
import { AddUserShellComponent, EditUserShellComponent, UsersListShellComponent } from './user';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: UsersListShellComponent },
      { path: 'add-user', canDeactivate:[UnsavedFormCheckGuard], component: AddUserShellComponent },
      { path: 'edit-user/:id', canDeactivate:[UnsavedFormCheckGuard], component: EditUserShellComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
