import { initialState, ITicketStoreState } from "./ticket-store";
import { reducer } from './ticket.reducer';
import * as actions from 'src/app/store/ticket-store/ticket.actions';
import { ITicket, ITicketFilter } from 'src/app/interfaces';

describe('TicketReducer', () => {
  describe('setCurrentTicketId', () => {
    it('returns expected state', () => {
      // arrange
      const id = 10;
      const expected = { ...initialState,  currentTicketId: id } as ITicketStoreState;
      const action = actions.setCurrentTicketId({ id });
      // act
      const actual = reducer(initialState, action);

      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('addTicketSuccess', () => {
    it('should return expected state', () => {
      // arrange
      const ticket = { completed: true, assigneeId: 10 } as ITicket;
      const action = actions.addTicketSuccess({ ticket });
      const expected = { ...initialState, tickets: [ticket] } as ITicketStoreState;

      // act
      const actual = reducer(initialState, action);

      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('assignTicketSuccess', () => {
    it('should return expected state', () => {
      // arrange
      const ticket = { assigneeId: 222, description: 'Test...'} as ITicket;
      const action = actions.assignTicketSuccess({ ticket });
      const expected = { ...initialState, tickets: [ticket] } as ITicketStoreState;

      // act
      const actual = reducer(initialState, action);

      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('completeTicketSuccess', () => {
    it('should return expected state', () => {
      // arrange
      const ticket = { assigneeId: 222, description: 'Test...'} as ITicket;
      const action = actions.completeTicketSuccess({ ticket });
      const expected = { ...initialState, tickets: [ticket] } as ITicketStoreState;

      // act
      const actual = reducer(initialState, action);

      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('filterTicketSucces', () => {
    it('should return expected state', () => {
      // arrange
      const filter = { assigneeId: 777, completed: true } as ITicketFilter;
      const action = actions.filterTickets({ filter });
      const expected = { ...initialState, currentFilter: filter } as ITicketStoreState;

      // act
      const actual = reducer(initialState, action);

      // assert
      expect(actual).toEqual(expected);
    });
  });

  describe('Unknown Actions', () => {
    it('should return initial state', () => {
      // arrange
      const action = { type: 'Unknow Action' };
      const expected = initialState;

      // act
      const actual = reducer(initialState, action);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
