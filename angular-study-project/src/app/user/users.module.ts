import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import {
  AddUserShellComponent,
  EditUserShellComponent,
  UsersComponent,
  UsersListShellComponent
} from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersListShellComponent,
    UsersComponent,
    AddUserShellComponent,
    EditUserShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class UsersModule { }
