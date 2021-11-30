import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import {
  AddUserContainerComponent,
  AddUserShellComponent,
  UsersComponent,
  UsersListShellComponent
} from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UsersListShellComponent,
    UsersComponent,
    AddUserContainerComponent,
    AddUserShellComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule { }
