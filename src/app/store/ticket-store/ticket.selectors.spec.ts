import { ITicket, ITicketFilter } from 'src/app/interfaces';
import { initialState, ITicketStoreState } from './ticket-store';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';

describe('TicketSelectors', () => {
  describe('selectCurrentTicket', () => {
    it('returns expected state', () => {
      // arrange
      const ticket = { id: 1 } as ITicket;
      const inputState = { ...initialState, currentTicketId: 1, tickets: [ticket] } as ITicketStoreState;
      const expected = ticket;

      // act
      const actual = ticketSelectors.selectCurrentTicket.projector(inputState);

      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('selectFiltredTickets', () => {
    it('returns expected state', () => {
      // arrange
      const ticket1 = { assigneeId: 111 } as ITicket;
      const ticket2 = { assigneeId: 111 } as ITicket;
      const ticket3 = { completed: true } as ITicket;
      const tickets = [ ticket1, ticket2, ticket3];
      const currentFilter = { assigneeId: 111 } as ITicketFilter;
      const inputState = { ...initialState, tickets, currentFilter } as ITicketStoreState;
      const expected = [ticket1, ticket2];

      // act
      const actual = ticketSelectors.selectFilteredTickets.projector(inputState);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
