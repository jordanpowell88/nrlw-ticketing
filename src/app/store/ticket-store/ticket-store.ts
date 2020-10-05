import { ITicket, ITicketFilter } from 'src/app/interfaces';

export interface ITicketStoreState {
  isLoading: boolean;
  error: string;
  tickets: ITicket[];
  filter: ITicketFilter;
}

export const initialState: ITicketStoreState = {
  isLoading: false,
  error: null,
  tickets: [],
  filter: {
    assigneeId: null,
    completed: null
  },
};
