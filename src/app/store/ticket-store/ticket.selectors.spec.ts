import { ITicket, ITicketFilter } from 'src/app/interfaces';
import { initialState, ITicketStoreState } from './ticket-store';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';

describe('TicketSelectors', () => {
  describe('selectCurrentTicket', () => {
    it('returns expected state', () => {
      // arrange
      const ticket = { id: 1 } as ITicket;
      const inputState = { ...initialState, tickets: [ticket] } as ITicketStoreState;
      const expected = ticket;

      // act
      const actual = ticketSelectors.selectCurrentTicket.projector(inputState, 1);

      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('selectFilteredTickets', () => {
    it('returns expected state', () => {
      // arrange
      const ticket1 = { assigneeId: 111, completed: true } as ITicket;
      const ticket2 = { assigneeId: 111, completed: false } as ITicket;
      const tickets = [ ticket1, ticket2];
      const filter = { assigneeId: 111, completed: true } as ITicketFilter;
      const inputState = { ...initialState, tickets, filter } as ITicketStoreState;
      const expected = [ticket1];

      // act
      const actual = ticketSelectors.selectFilteredTickets.projector(inputState);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
