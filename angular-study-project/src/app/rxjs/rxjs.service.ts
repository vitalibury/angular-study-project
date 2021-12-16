import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  clickRefreshSub: BehaviorSubject<number> = new BehaviorSubject(0);
  clickExportSub: BehaviorSubject<number> = new BehaviorSubject(0);
  clickSaveSub: BehaviorSubject<number> = new BehaviorSubject(0);
  clickSendSub: BehaviorSubject<number> = new BehaviorSubject(0);

  refresh(): Observable<number> {
    this.clickRefreshSub.next(this.clickRefreshSub.getValue() + 1);
    return this.clickRefreshSub.pipe(delay(2000));
  }

  export(): Observable<number> {
    this.clickExportSub.next(this.clickExportSub.getValue() + 1);
    const newObserv = of(this.clickExportSub.getValue());
    return newObserv.pipe(delay(this.randomDelay()));
  }

  save(): Observable<number> {
    this.clickSaveSub.next(this.clickSaveSub.getValue() + 1);
    const newObserv = of(this.clickSaveSub.getValue());
    return newObserv.pipe(delay(this.randomDelay()));
  }

  send(): Observable<number> {
    this.clickSendSub.next(this.clickSendSub.getValue() + 1);
    const newObserv = of(this.clickSendSub.getValue());
    return newObserv.pipe(delay(2000));
  }

  randomDelay(): number {
    const value = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    console.log(' delay: ' + value + ' ms');
    return value;
  }
}
