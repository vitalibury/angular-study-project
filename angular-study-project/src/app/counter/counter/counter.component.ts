import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { clear, decrease, increase } from 'src/app/counter/state/counter.actions';
import { counterSelector, updateAtSelector } from '../state/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 0;
  cannotDecrease: boolean;
  updatedAt?: number;
  updatedAt$: Observable<number>;

  count$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.count$ = this.store.select(counterSelector).pipe(
      tap(count => count <= 0
        ? this.cannotDecrease = true
        : this.cannotDecrease = false)
    );
    this.updatedAt$ = this.store.select(updateAtSelector);
  }

  get canDecrease(): boolean {
    return this.counter > 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.store.dispatch(increase());
  }

  decrease() {
    this.updatedAt = Date.now();
    this.store.dispatch(decrease());
  }

  clear() {
    this.updatedAt = Date.now();
    this.store.dispatch(clear());
  }

}
