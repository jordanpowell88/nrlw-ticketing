import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, retry, switchMap } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import * as actions from './ticket.actions';

@Injectable()
export class TicketStoreEffects {
  constructor(
    private actions$: Actions,
    private service: BackendService
  ) {}

  loadTicketsEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTickets),
      switchMap(() => this.service.tickets()
        .pipe(
          map(tickets => actions.loadTicketsSuccess({ tickets })),
          catchError(error => of(actions.loadTicketsFailed({ error })))
        )
      )
    )
  );

  addTicketEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addTicket),
      concatMap(action => this.service.newTicket(action.description)
        .pipe(
          map(ticket => actions.addTicketSuccess({ ticket })),
          catchError(error => of(actions.addTicketFailed({ error })))
        )
      )
    )
  );

  assignTicketEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.assignTicket),
      concatMap(action => this.service.assign(action.ticketId, action.userId)
        .pipe(
          map(ticket => actions.assignTicketSuccess({ ticket })),
          catchError(error => of(actions.assignTicketFailed({ error })))
        )
      )
    )
  );

  completeTicketEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.completeTicket),
      concatMap(action => this.service.complete(action.ticketId, true)
        .pipe(
          map(ticket => actions.completeTicketSuccess({ ticket })),
          catchError(error => of(actions.completeTicketFailed({ error })))
        )
      )
    )
  );
}
