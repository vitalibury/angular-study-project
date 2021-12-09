import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RxjsService } from '../../rxjs.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  counter$: Observable<number> = this.rxjsService.clickCounter$.asObservable();
  mode$: Observable<string> = this.rxjsService.buttonMode$.asObservable();
  mode: string;

  private subscription: Subscription = new Subscription();
  private subscriptionMode: Subscription = new Subscription();

  constructor(private rxjsService: RxjsService) { }

  ngOnInit(): void {
    this.subscriptionMode.add(this.mode$.subscribe(mode => this.mode = mode));
  }

  ngOnDestroy(): void {    
    this.subscription.unsubscribe();
    this.subscriptionMode.unsubscribe();
  }

  onButtonClick(buttonMode: string): void {
    if (this.mode !== buttonMode) {
      this.subscription.unsubscribe();
      this.rxjsService.changeMode(buttonMode);
      this.subscription = new Subscription();
      this.subscription.add(this.rxjsService[`${buttonMode}`]().subscribe());
    } else {
      this.rxjsService.increaseClick();
    }
  }

}
