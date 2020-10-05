import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ITicket, IUser } from '../interfaces';

/**
 * This service acts as a mock back-end.
 * It has some intentional errors that you might have to fix.
 */

function randomDelay() {
  return Math.random() * 4000;
}

@Injectable({ providedIn: 'root' })
export class BackendService {
  storedTickets: ITicket[] = [
    {
      id: 0,
      description: 'Install a monitor arm',
      assigneeId: 111,
      completed: false
    },
    {
      id: 1,
      description: 'Move the desk to the new location',
      assigneeId: 111,
      completed: false
    }
  ];

  storedUsers: IUser[] = [{ id: 111, name: 'Victor' }];

  lastId = 1;

  constructor() { }

  private findTicketById = id =>
    this.storedTickets.find(ticket => ticket.id === +id)

  private findUserById = id => this.storedUsers.find(user => user.id === +id);

  tickets() {
    return of(this.storedTickets).pipe(delay(randomDelay()));
  }

  ticket(id: number): Observable<ITicket> {
    return of(this.findTicketById(id)).pipe(delay(randomDelay()));
  }

  users() {
    return of(this.storedUsers).pipe(delay(randomDelay()));
  }

  user(id: number) {
    return of(this.findUserById(id)).pipe(delay(randomDelay()));
  }

  newTicket(description: string): Observable<ITicket> {
    const newTicket: ITicket = {
      id: ++this.lastId,
      description,
      assigneeId: null,
      completed: false
    };

    return of(newTicket).pipe(
      delay(randomDelay()),
      tap(console.log),
      tap((ticket: ITicket) => this.storedTickets = [ ...this.storedTickets, ticket]),
      tap(() => this.storedTickets)
    );
  }

  assign(ticketId: number, userId: number) {
    const foundTicket = this.findTicketById(+ticketId);
    const user = this.findUserById(+userId);

    if (foundTicket && user) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        tap((ticket: ITicket) => {
          ticket.assigneeId = +userId;
        })
      );
    }

    return throwError(new Error('ticket or user not found'));
  }

  complete(ticketId: number, completed: boolean) {
    const foundTicket = this.findTicketById(+ticketId);
    if (foundTicket) {
      return of({ ...foundTicket, completed: true }).pipe(
        delay(randomDelay()),
        tap((ticket: ITicket) => ticket.completed = true)
      );
    }

    return throwError(new Error('ticket not found'));
  }
}
