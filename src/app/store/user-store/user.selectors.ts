import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserStore } from './user-store';
import { userFeatureKey } from './user.reducers';

const selectUserFeatureState = createFeatureSelector<IUserStore>(userFeatureKey);

export const selectUsers = createSelector(
  selectUserFeatureState,
  state => state.users
);
