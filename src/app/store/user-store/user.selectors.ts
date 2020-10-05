import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createSecretKey } from 'crypto';
import { IUserStore } from './user-store';
import { userFeatureKey } from './user.reducers';

const selectUserFeatureState = createFeatureSelector<IUserStore>(userFeatureKey);

export const selectUserIsLoading = createSelector(
  selectUserFeatureState,
  state => state.isLoading
);

export const selectUserError = createSelector(
  selectUserFeatureState,
  state => state.error
);

export const selectUsers = createSelector(
  selectUserFeatureState,
  state => state.users
);
