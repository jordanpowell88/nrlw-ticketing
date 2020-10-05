import { IUser } from 'src/app/interfaces';

export interface IUserStore {
  isLoading: boolean;
  error: string;
  users: IUser[];
}

export const initialState: IUserStore = {
  isLoading: false,
  error: null,
  users: []
};
