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
import { LeaveFormPagePopupComponent } from './components/leave-form-page-popup/leave-form-page-popup.component';



@NgModule({
  declarations: [
    UserItemComponent,
    UserFormComponent,
    AddressesComponent,
    VehicleComponent,
    FormErrorComponent,
    LeaveFormPagePopupComponent
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
    FormErrorComponent
  ]
})
export class SharedModule { }
