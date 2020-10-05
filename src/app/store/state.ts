import { ITicketStoreState } from './ticket-store/ticket-store';
import { IUserStore } from './user-store/user-store';

export interface IState {
  tickets: ITicketStoreState;
  users: IUserStore;
}
