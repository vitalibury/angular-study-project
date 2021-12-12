import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material';

import { HeaderComponent, MainLayoutComponent } from '.';
import { UsersModule } from '../user/users.module';
import { RxJsModule } from '../rxjs/rxjs.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    UsersModule,
    RxJsModule
  ]
})
export class LayoutModule { }
