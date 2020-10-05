import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, retry, switchMap, tap } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';
import * as actions from './ticket.actions';
import { ticketFeatureKey } from './ticket.reducer';

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
      switchMap(action => this.service.newTicket(action.ticket.description)
        .pipe(
          map(ticket => actions.addTicketSuccess({ ticket })),
          catchError(error => of(actions.addTicketFailed({ error })))
        )
      ),
      retry(3),
    )
  );

  assignTicketEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.assignTicket),
      switchMap(action => this.service.assign(action.ticketId, action.userId)
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
      switchMap(action => this.service.complete(action.ticketId, true)
        .pipe(
          map(ticket => actions.completeTicketSuccess({ ticket })),
          catchError(error => of(actions.completeTicketFailed({ error })))
        )
      )
    )
  );
}
