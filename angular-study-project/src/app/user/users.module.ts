import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';

import {
  AddUserShellComponent,
  EditUserShellComponent,
  UsersComponent,
  UsersListShellComponent
} from '.';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { UserCompanyDetailsComponent } from './components/user-company-details/user-company-details.component';
import { ServerTableShellComponent } from './containers/server-table-shell/server-table-shell.component';
import { ClientTableShellComponent } from './containers/client-table-shell/client-table-shell.component';
import { ServerTableComponent } from './components/server-table/server-table.component';
import { UserContactDetailsComponent } from './components/user-contact-details/user-contact-details.component';
import { UserPersonalDetailsComponent } from './components/user-personal-details/user-personal-details.component';
import { UserCompanyDetailsShellComponent } from './containers/user-company-details-shell/user-company-details-shell.component';
import { UserContactDetailsShellComponent } from './containers/user-contact-details-shell/user-contact-details-shell.component';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { UserPersonalDetailsShellComponent } from './containers/user-personal-details-shell/user-personal-details-shell.component';
import { ClientTableComponent } from './components/client-table/client-table.component';


@NgModule({
  declarations: [
    UsersListShellComponent,
    UsersComponent,
    EditUserShellComponent,
    AddUserShellComponent,
    UserDetailsShellComponent,
    UserCompanyDetailsComponent,
    UserPersonalDetailsComponent,
    UserContactDetailsComponent,
    UserCompanyDetailsShellComponent,
    UserContactDetailsShellComponent,
    UserPersonalDetailsShellComponent,
    ServerTableShellComponent,
    ClientTableShellComponent,
    ServerTableComponent,
    ClientTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    RouterModule,
    MaterialModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
