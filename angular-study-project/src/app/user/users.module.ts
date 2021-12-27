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
