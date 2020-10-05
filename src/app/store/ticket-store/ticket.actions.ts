import { createAction, props } from '@ngrx/store';
import { ITicket, ITicketFilter } from 'src/app/interfaces';


// SET CURRENT TICKET ID
export const setCurrentTicketId = createAction(
  '[TICKETS] Set Current Ticket Id',
  props<{ id: number }>()
);

// LOAD
export const loadTickets = createAction(
  '[TICKETS] Load Tickets'
);

export const loadTicketsSuccess = createAction(
  '[TICKETS] Load Tickets Success',
  props<{ tickets: ITicket[] }>()
);

export const loadTicketsFailed = createAction(
  '[TICKETS] Load Tickets Failed',
  props<{ error: string }>()
);

// ADD
export const addTicket = createAction(
  '[TICKETS] Add Ticket',
  props<{ ticket: ITicket }>()
);

export const addTicketSuccess = createAction(
  '[TICKETS] Add Ticket Success',
  props<{ ticket: ITicket }>()
);

export const addTicketFailed = createAction(
  '[TICKETS] Add Ticket Failed',
  props<{ error: string }>()
);


// ASSIGN
export const assignTicket = createAction(
  '[TICKETS] Assign Ticket',
  props<{ ticketId: number, userId: number }>()
);

export const assignTicketSuccess = createAction(
  '[TICKETS] Assign Ticket Success',
  props<{ ticket: ITicket }>()
);

export const assignTicketFailed = createAction(
  '[TICKETS] Assign Ticket Failed',
  props< { error: string }>()
);


// COMPLETE
export const completeTicket = createAction(
  '[TICKETS] Complete Ticket',
  props<{ ticketId: number }>()
);

export const completeTicketSuccess = createAction(
  '[TICKETS] Complete Ticket Success',
  props<{ ticket: ITicket }>()
);

export const completeTicketFailed = createAction(
  '[TICKETS] Complete Ticket Failed',
  props<{ error: string }>()
);

// FILTER
export const filterTickets = createAction(
  '[TICKETS] Filter Tickets',
  props<{ filter: ITicketFilter }>()
);
