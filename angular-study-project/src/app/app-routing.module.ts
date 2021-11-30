import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout';
import { AddUserShellComponent, UsersListShellComponent } from './user';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: UsersListShellComponent },
      { path: 'add-user', component: AddUserShellComponent },
      // {path: 'cards', component: ContactCardsComponent},
      // {path: 'about', component: AboutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
