import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IUser } from '../..';

@Component({
  selector: 'app-user-details-shell',
  templateUrl: './user-details-shell.component.html',
  styleUrls: ['./user-details-shell.component.scss']
})
export class UserDetailsShellComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  user$: Observable<IUser>;
  activeLinkIndex: number;
  detailsLinks = [
    {
      label: 'Company info',
      link: './company',
      index: 0
    },
    {
      label: 'Personal info',
      link: './personal',
      index: 1
    },
    {
      label: 'Contact info',
      link: './contact',
      index: 2
    },
  ]

  constructor(private router: Router, private activateRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.defineActiveDetailsLinkIndex();
    this.subscription.add(this.router.events.subscribe(() => this.defineActiveDetailsLinkIndex()))

    this.user$ = this.activateRoute.params.pipe(
      switchMap(params => {
        return this.http.getUserById(params['id'])
      })
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  defineActiveDetailsLinkIndex() {
    const currentDetailsRoute = this.router.url.split('/').slice(-1)[0];
    this.activeLinkIndex = this.detailsLinks.findIndex(link => link.link.split('/').slice(-1)[0] === currentDetailsRoute);
  }

}
