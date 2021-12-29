import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  AddUserShellComponent,
  EditUserShellComponent,
  UsersComponent,
  UsersListShellComponent
} from '.';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { UserCompanyDetailsComponent } from './components/user-company-details/user-company-details.component';
import { UserPersonalDetailsComponent } from './components/user-personal-details/user-personal-details.component';
import { UserContactDetailsComponent } from './components/user-contact-details/user-contact-details.component';
import { RouterModule } from '@angular/router';
import { UserCompanyDetailsShellComponent } from './containers/user-company-details-shell/user-company-details-shell.component';
import { UserContactDetailsShellComponent } from './containers/user-contact-details-shell/user-contact-details-shell.component';
import { UserPersonalDetailsShellComponent } from './containers/user-personal-details-shell/user-personal-details-shell.component';


@NgModule({
  declarations: [
    UsersListShellComponent,
    UsersComponent,
    AddUserShellComponent,
    EditUserShellComponent,
    UserDetailsShellComponent,
    UserCompanyDetailsComponent,
    UserPersonalDetailsComponent,
    UserContactDetailsComponent,
    UserCompanyDetailsShellComponent,
    UserContactDetailsShellComponent,
    UserPersonalDetailsShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ]
})
export class UsersModule { }
