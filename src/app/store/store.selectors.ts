import { createSelector } from '@ngrx/store';
import { ITicket, IUser } from '../interfaces';
import * as ticketSelectors from './ticket-store/ticket.selectors';
import * as userSelectors from './user-store/user.selectors';

export const selectErrors = createSelector(
  ticketSelectors.selectTicketError,
  userSelectors.selectUserError,
  (ticketError: string, userError: string) =>
    ticketError || userError
);

export const selectIsLoading = createSelector(
  ticketSelectors.selectTicketIsLoading,
  userSelectors.selectUserIsLoading,
  (ticketIsLoading: boolean, userIsLoading: boolean) =>
    ticketIsLoading || userIsLoading
);
