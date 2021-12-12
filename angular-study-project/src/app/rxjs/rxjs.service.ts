import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';

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
    const nextCount = this.clickRefreshSub.getValue() + 1;
    this.clickRefreshSub.next(nextCount);
    return this.clickRefreshSub;
  }

  export(): void {
    this.clickExportSub.next(this.clickExportSub.getValue() + 1);
  }

  save(): void {
    this.clickSaveSub.next(this.clickSaveSub.getValue() + 1);
  }

  send() {
    this.clickSendSub.next(this.clickSendSub.getValue() + 1);
  }

  randomDelay(mode: string): number {
    const value = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
    console.log(mode + ' delay: ' + value + ' ms');
    return value;
  }
}
