import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITicket, ITicketFilter } from 'src/app/interfaces';
import { ITicketStoreState } from './ticket-store';
import { ticketFeatureKey } from './ticket.reducer';

export const selectTicketFeatureState = createFeatureSelector<ITicketStoreState>(ticketFeatureKey);

export const selectTicketIsLoading = createSelector(
  selectTicketFeatureState,
  state => state.isLoading
);

export const selectTicketError = createSelector(
  selectTicketFeatureState,
  state => state.error
);

export const selectAllTickets = createSelector(
  selectTicketFeatureState,
  state => state.tickets
);

export const selectCurrentTicketFilter = createSelector(
  selectTicketFeatureState,
  state => state.currentFilter
);

export const selectCurrentTicketId = createSelector(
  selectTicketFeatureState,
  state => state.currentTicketId
);

export const selectCurrentTicket = createSelector(
  selectTicketFeatureState,
  state => state.tickets.find(ticket => ticket.id === state.currentTicketId)
);

export const selectFilteredTickets = createSelector(
  selectTicketFeatureState,
  state => state.tickets.filter(ticket =>
    state.currentFilter.assigneeId === null ||
    ticket.assigneeId === state.currentFilter.assigneeId
  ).filter(ticket =>
    state.currentFilter.completed === null ||
    ticket.completed === state.currentFilter.completed
  )
);
