import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnsavedFormCheckGuard } from './shared/guards/unsaved-form-check/unsaved-form-check.guard';
import { AuthGuard } from './auth/auth.guard';

import { MainLayoutComponent } from './layout';
import { RxjsComponent } from './rxjs';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: '', component: MainLayoutComponent, canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./user/users.module').then(m => m.UsersModule), canLoad: [AuthGuard]},
      { path: 'rxjs', component: RxjsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    UnsavedFormCheckGuard
  ]
})
export class AppRoutingModule { }
