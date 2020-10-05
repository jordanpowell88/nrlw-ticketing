import { Action, createReducer, on } from '@ngrx/store';
import { initialState, IUserStore } from './user-store';
import * as actions from './user.actions';

export const userFeatureKey = 'user';

const userReducer = createReducer(
  initialState,
  on(actions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(actions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    isLoading: false,
    error: null
  })),
  on(actions.loadUsersFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  }))
);

export function reducer(state: IUserStore, action: Action): IUserStore {
  return userReducer(state, action);
}
