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
import { FullNamePipe } from './pipes/full-name.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { YearsPipe } from './pipes/years.pipe';



@NgModule({
  declarations: [
    UserItemComponent,
    UserFormComponent,
    AddressesComponent,
    VehicleComponent,
    FormErrorComponent,
    LeaveFormPagePopupComponent,
    FullNamePipe,
    PhoneFormatPipe,
    YearsPipe
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
    FullNamePipe,
    PhoneFormatPipe,
    YearsPipe
  ]
})
export class SharedModule { }
