import { IUser } from 'src/app/interfaces';
import { IBaseState } from '../base-state';

export interface IUserStore extends IBaseState {
  users: IUser[];
}

export const initialState: IUserStore = {
  isLoading: false,
  error: null,
  users: null
};
