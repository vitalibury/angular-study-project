import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IUser } from '../..';

@Component({
  selector: 'app-user-personal-details-shell',
  templateUrl: './user-personal-details-shell.component.html',
  styleUrls: ['./user-personal-details-shell.component.scss']
})
export class UserPersonalDetailsShellComponent implements OnInit {

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
