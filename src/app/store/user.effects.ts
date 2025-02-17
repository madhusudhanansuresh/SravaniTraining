import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import * as UserActions from './user.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers), // Listen for the 'loadUsers' action
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })), // Dispatch success action
          catchError((error) => of(UserActions.loadUsersFailure({ error: error.message }))) // Dispatch failure action
        )
      )
    )
  );
}
