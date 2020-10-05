import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Observable, of, throwError } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { TicketStoreEffects } from './ticket.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ITicket } from 'src/app/interfaces';
import * as actions from './ticket.actions';
import { take } from 'rxjs/operators';
import { Action } from '@ngrx/store';

class FakeBackendService {
  tickets(): Observable<ITicket[]> {
    return of([]);
  }
}

describe('TicketEffects', () => {
  let actions$: Observable<Action>;
  let effect: TicketStoreEffects;
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TicketStoreEffects,
        provideMockActions(() => actions$),
        { provide: BackendService, useClass: FakeBackendService }
      ]
    });

    effect = TestBed.inject(TicketStoreEffects);
    service = TestBed.inject(BackendService);
  });

  it('should create an instance', () => {
    expect(effect).toBeTruthy();
  });

  describe('loadTicketEffects', () => {
    it('should dispatch loadTicketSuccess action', () => {
      // arrange
      const expected = actions.loadTicketsSuccess({ tickets: [] });
      actions$ = of(actions.loadTickets());
      spyOn(service, 'tickets').and.returnValue(of([]));

      // act
      effect.loadTicketsEffects$.pipe(take(1)).subscribe(actual => {
        // arrange
        expect(service.tickets).toHaveBeenCalledTimes(1);
        expect(actual).toEqual(expected);
      });
    });
    it('should dispatch loadTicketFailed action', () => {
      // arrange
      const error = 'Bad Error';
      const expected = actions.loadTicketsFailed({ error });
      actions$ = of(actions.loadTickets());
      spyOn(service, 'tickets').and.returnValue(throwError(error));

      // act
      effect.loadTicketsEffects$.pipe(take(1)).subscribe(actual => {
        // assert
        expect(service.tickets).toHaveBeenCalledTimes(1);
        expect(actual).toEqual(expected);
      });
    });
  });
});
