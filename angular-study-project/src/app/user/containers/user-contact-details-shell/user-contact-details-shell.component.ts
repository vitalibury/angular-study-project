import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IUser } from '../..';

@Component({
  selector: 'app-user-contact-details-shell',
  templateUrl: './user-contact-details-shell.component.html',
  styleUrls: ['./user-contact-details-shell.component.scss']
})
export class UserContactDetailsShellComponent implements OnInit {

  variable: 56;
  user$: Observable<IUser>;
  constructor(private activateRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.user$ = this.activateRoute.parent.params.pipe(
      switchMap(params => {
        return this.http.getUserById(params['id'])
      })
    )
  }

}
