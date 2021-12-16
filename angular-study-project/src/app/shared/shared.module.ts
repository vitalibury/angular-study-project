import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';

import {
  AddressesComponent,
  FormErrorComponent,
  UserFormComponent,
  UserItemComponent,
  VehicleComponent
} from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserItemComponent,
    UserFormComponent,
    AddressesComponent,
    VehicleComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    UserItemComponent,
    UserFormComponent,
    AddressesComponent,
    FormErrorComponent,
    MaterialModule
  ]
})
export class SharedModule { }
