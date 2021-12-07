import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import {
  AddressesComponent,
  AddUserComponent,
  AddUserShellComponent,
  UsersComponent,
  UsersListShellComponent
} from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersListShellComponent,
    UsersComponent,
    AddUserComponent,
    AddUserShellComponent,
    AddressesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule { }
