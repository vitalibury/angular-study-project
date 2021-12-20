import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
