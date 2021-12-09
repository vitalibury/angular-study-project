import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RxjsComponent } from ".";
import { MaterialModule } from "../material";


@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class RxJsModule {}