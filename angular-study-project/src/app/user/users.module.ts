import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import { UsersContainerComponent, UsersListShellComponent } from '.';




@NgModule({
  declarations: [  
    UsersListShellComponent,
    UsersContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersContainerComponent
  ]
})
export class UsersModule { }
