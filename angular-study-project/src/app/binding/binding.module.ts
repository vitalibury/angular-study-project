import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BindingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BindingComponent
  ]
})
export class BindingModule { }
