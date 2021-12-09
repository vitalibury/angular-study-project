import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, debounceTime, delay, map, mergeAll, Observable, of, tap, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  clickCounter$: BehaviorSubject<number> = new BehaviorSubject(0);
  buttonMode$: BehaviorSubject<string> = new BehaviorSubject('');

  delay: number = 2000;

  changeMode(mode: string): void {
    this.buttonMode$.next(mode);
    this.clickCounter$.next(1);
  }

  increaseClick() {
    const nextCount = this.clickCounter$.getValue() + 1;
    this.clickCounter$.next(nextCount);
  }

  refresh(): Observable<number> {
    return this.clickCounter$.pipe(
      debounceTime(this.delay),
      tap((x) => console.log('Refresh: ' + x))
    )
  }

  export(): Observable<number> {
    const clicksMap = this.clickCounter$.pipe(
      map(i => of(i).pipe(delay(this.randomDelay())))
    );
    return clicksMap.pipe(
      mergeAll(),
      tap((x) => console.log('Export: ' + x))
    )
  }

  save(): Observable<number> {
    return this.clickCounter$.pipe(
      concatMap(
        i => of(i).pipe(delay(this.randomDelay()))
      ),
      tap((x) => console.log('Save: ' + x))
    )
  }

  send(): Observable<number> {
    return this.clickCounter$.pipe(
      throttleTime(this.delay),
      tap((x) => console.log('Send: ' + x))
    )
  }

  randomDelay(): number {
    const value = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    console.log('delay: ' + value + ' ms');
    return value;
  }
}
