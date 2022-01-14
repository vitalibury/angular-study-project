import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";
import { CounterComponent } from "./counter/counter.component";
import { CounterEffects } from "./state/counter.effects";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }