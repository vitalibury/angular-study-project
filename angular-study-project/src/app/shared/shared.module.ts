import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { UserItemComponent } from './user-item/user-item.component';
import { VehicleComponent } from './vehicle/vehicle.component';



@NgModule({
  declarations: [
    UserItemComponent,
    VehicleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserItemComponent
  ]
})
export class SharedModule { }
