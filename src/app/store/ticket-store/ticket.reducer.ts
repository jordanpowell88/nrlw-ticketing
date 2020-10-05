import { Action, createReducer, on } from '@ngrx/store';
import { ITicket } from 'src/app/interfaces';
import { initialState, ITicketStoreState } from './ticket-store';
import * as actions from './ticket.actions';

export const ticketFeatureKey = 'ticket';

const ticketReducer = createReducer(
  initialState,
  on(actions.loadTickets, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(actions.loadTicketsSuccess, (state, { tickets }) => ({
    ...state,
    tickets,
    isLoading: false,
    error: null
  })),
  on(actions.loadTicketsFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(actions.addTicket, (state, { ticket }) => ({
    ...state,
    isLoading: false,
    error: null
  })),
  on(actions.addTicketSuccess, (state, { ticket }) => ({
    ...state,
    tickets: [
      ...state.tickets,
      ticket
    ],
    isLoading: false,
    error: null
  })),
  on(actions.addTicketFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(actions.assignTicket, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(actions.assignTicketSuccess, (state, { ticket }) => ({
    ...state,
    tickets: updateTicket(state.tickets, ticket),
    isLoading: false,
    error: null
  })),
  on(actions.assignTicketFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  })),
  on(actions.completeTicket, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(actions.completeTicketSuccess, (state, { ticket }) => ({
    ...state,
    tickets: updateTicket(state.tickets, ticket),
    isLoading: false,
    error: null
  })),
  on(actions.completeTicketFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  })),
  on(actions.filterTickets, (state, { filter }) => ({
    ...state,
    currentFilter: filter
  }))
);

function updateTicket(tickets: ITicket[], ticket: ITicket): ITicket[] {
  return tickets.map((t: ITicket) => ticket.id !== t.id ? t : { ...t, ...ticket} as ITicket );
}

export function reducer(state: ITicketStoreState, action: Action): ITicketStoreState {
  return ticketReducer(state, action);
}
