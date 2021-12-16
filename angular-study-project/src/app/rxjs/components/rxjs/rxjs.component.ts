import { Component, OnInit } from '@angular/core';
import { concatMap, exhaustMap, first, mergeMap, Observable, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { RxjsService } from '../../rxjs.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  refreshSub = new Subject();
  exportSub = new Subject();
  saveSub = new Subject();
  sendSub: Subject<void> = new Subject();

  refreshCounter$: Observable<number>;
  exportCounter$: Observable<number>;
  saveCounter$: Observable<number>;
  sendCounter$: Observable<number>;

  constructor(private rxjsService: RxjsService) { }

  ngOnInit(): void {
    this.refreshCounter$ = this.refreshSub.pipe(switchMap(() => this.rxjsService.refresh()));
    this.exportCounter$ = this.exportSub.pipe(mergeMap(() => this.rxjsService.export()));
    this.saveCounter$ = this.saveSub.pipe(concatMap(() => this.rxjsService.save()));
    this.sendCounter$ = this.sendSub.pipe(exhaustMap(() => this.rxjsService.send())
    );
  }

  onRefreshClick() {
    this.refreshSub.next(null);
  }

  onExportClick() {
    this.exportSub.next(null);
  }

  onSaveClick() {
    this.saveSub.next(null);
  }

  onSendClick() {
    this.sendSub.next();
  }

}
