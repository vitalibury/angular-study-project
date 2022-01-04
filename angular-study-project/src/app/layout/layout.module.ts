import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material';

import { HeaderComponent, MainLayoutComponent } from '.';
import { RxJsModule } from '../rxjs/rxjs.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    RxJsModule
  ]
})
export class LayoutModule { }
