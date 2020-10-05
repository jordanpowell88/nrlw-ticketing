import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITicketStoreState } from './ticket-store';
import { ticketFeatureKey } from './ticket.reducer';

export const selectTicketFeatureState = createFeatureSelector<ITicketStoreState>(ticketFeatureKey);

export const selectIsLoading = createSelector(
  selectTicketFeatureState,
  state => state.isLoading
);

export const selectError = createSelector(
  selectTicketFeatureState,
  state => state.error
);

export const selectCurrentFilter = createSelector(
  selectTicketFeatureState,
  state => state.filter
);

export const selectCurrentTicket = createSelector(
  selectTicketFeatureState,
  (state: ITicketStoreState, id: number) => state.tickets.find(ticket => ticket.id === id)
);

export const selectFilteredTickets = createSelector(
  selectTicketFeatureState,
  state => state.tickets.filter(ticket =>
    (ticket.assigneeId === state.filter.assigneeId || state.filter.assigneeId === null) &&
    (ticket.completed === state.filter.completed || state.filter.completed === null)
  )
);
