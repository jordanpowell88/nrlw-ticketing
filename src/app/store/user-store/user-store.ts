import { IUser } from 'src/app/interfaces';

export interface IUserStore {
  users: IUser[];
}

export const initialState: IUserStore = {
  users: []
};
