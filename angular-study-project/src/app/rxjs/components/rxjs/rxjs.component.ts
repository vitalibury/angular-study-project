import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatMap, delay, exhaustAll, map, mergeAll, Observable, of, Subject, Subscription, switchMap, tap, throttleTime } from 'rxjs';
import { RxjsService } from '../../rxjs.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  refreshSub = new Subject();
  refreshCounter$: Observable<number> = this.rxjsService.clickRefreshSub.asObservable();
  exportCounter$: Observable<number> = this.rxjsService.clickExportSub.asObservable();
  saveCounter$: Observable<number> = this.rxjsService.clickSaveSub.asObservable();
  sendCounter$: Observable<number> = this.rxjsService.clickSendSub.asObservable();

  constructor(private rxjsService: RxjsService) { }

  ngOnInit(): void {
    this.subscription.add(this.refreshSub.pipe(
      switchMap(() => this.rxjsService.refresh().pipe(delay(2000))),
      tap(x => console.log(x)),
    ).subscribe());              // почему если перед switchCase использовать delay то не работает
    
    this.subscription.add(this.exportCounter$.pipe(
      map(x => of(x).pipe(delay(this.rxjsService.randomDelay('export')))),
      mergeAll(),
      tap(x => console.log(x)),
    ).subscribe());

    this.subscription.add(this.saveCounter$.pipe(
      concatMap(i => of(i).pipe(delay(this.rxjsService.randomDelay('save')))),
      tap(x => console.log(x))
    ).subscribe());

    this.subscription.add(this.sendCounter$.pipe(
      map(x => of(x).pipe(delay(2000))),
      exhaustAll(),
      tap(x => console.log(x))
    ).subscribe());
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRefreshClick() {
    this.refreshSub.next(null);
  }

  onExportClick() {
    this.rxjsService.export();
  }

  onSaveClick() {
    this.rxjsService.save();
  }

  onSendClick() {
    this.rxjsService.send();
  }

}
