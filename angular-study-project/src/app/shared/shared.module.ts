import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';

import {
  FormErrorComponent,
  UserItemComponent,
  VehicleComponent
} from '.';



@NgModule({
  declarations: [
    UserItemComponent,
    VehicleComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserItemComponent,
    FormErrorComponent,
    MaterialModule
  ]
})
export class SharedModule { }
