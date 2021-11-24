import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersShellComponent } from './users-shell.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [  
    UsersShellComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    UsersShellComponent
  ]
})
export class UsersModule { }
