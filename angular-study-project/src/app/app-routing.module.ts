import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnsavedFormCheckGuard } from './shared/guards/unsaved-form-check/unsaved-form-check.guard';

import { MainLayoutComponent } from './layout';
import { AddUserShellComponent, EditUserShellComponent, UsersListShellComponent } from './user';
import { RxjsComponent } from './rxjs';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: UsersListShellComponent },
      { path: 'add-user', component: AddUserShellComponent },
      { path: 'rxjs', component: RxjsComponent },
      // {path: 'cards', component: ContactCardsComponent},
      // {path: 'about', component: AboutComponent}
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
