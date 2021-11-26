import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';

import { UserItemComponent, VehicleComponent } from '.';



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
    UserItemComponent,
    MaterialModule
  ]
})
export class SharedModule { }
