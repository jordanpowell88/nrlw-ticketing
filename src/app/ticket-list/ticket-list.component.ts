import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';
import * as userSelectors from 'src/app/store/user-store/user.selectors';
import * as ticketActions from 'src/app/store/ticket-store/ticket.actions';
import * as userActions from 'src/app/store/user-store/user.actions';
import { ITicketFilter } from '../interfaces';
import { Router } from '@angular/router';
import * as selectors from 'src/app/store/store.selectors';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets$ = this.store.select(ticketSelectors.selectAllTickets);
  users$ = this.store.select(userSelectors.selectUsers);
  loading$ = this.store.select(selectors.selectIsLoading);
  errors$ = this.store.select(selectors.selectErrors);

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ticketActions.loadTickets());
    this.store.dispatch(userActions.loadUsers());
  }

  updateFilters(filter: ITicketFilter): void {
    this.store.dispatch(ticketActions.filterTickets({ filter }));
  }

  goToTicketDetails(id: number): void {
    this.store.dispatch(ticketActions.setCurrentTicketId({ id }));
    this.router.navigate([`/tickets/${id}`]);
  }
}
