import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { RegistrationShellComponent } from './containers/registration-shell/registration-shell.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginShellComponent,
    RegistrationShellComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
