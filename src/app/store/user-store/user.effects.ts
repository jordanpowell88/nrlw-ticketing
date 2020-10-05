import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import * as actions from './user.actions';

@Injectable()
export class UserStoreEffects {
  constructor(
    private actions$: Actions,
    private service: BackendService
  ) { }

  loadUsersEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUsers),
      switchMap(() => this.service.users()
        .pipe(
          map(users => actions.loadUsersSuccess({ users })),
          catchError(error => of(actions.loadUsersFailed({ error })))
        )
      )
    )
  );
}
