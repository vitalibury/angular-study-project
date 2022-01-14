import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { UsersService } from "..";
import { getAllUsers, loadUsers } from "./users.actions";

@Injectable()
export class UsersEffects {
  getAllUsers$ = createEffect(
    () => this.actions$.pipe(
        ofType(getAllUsers),
        switchMap(() => this.usersService.getUsers().pipe(
            map(users => loadUsers({users: users})))
        ),
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) { }
}