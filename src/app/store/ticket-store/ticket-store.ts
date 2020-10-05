import { ITicket, ITicketFilter } from 'src/app/interfaces';
import { IBaseState } from '../base-state';

export interface ITicketStoreState extends IBaseState {
  tickets: ITicket[];
  currentFilter: ITicketFilter;
  currentTicketId: number;
}

export const initialState: ITicketStoreState = {
  isLoading: false,
  error: null,
  tickets: [],
  currentFilter: {
    assigneeId: null,
    completed: null
  },
  currentTicketId: null
};
