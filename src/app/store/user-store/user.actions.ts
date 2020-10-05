import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/interfaces';
import { createDeflate } from 'zlib';

export const loadUsers = createAction(
  '[USERS] Load Users'
);

export const loadUsersSuccess = createAction(
  '[USERS] Load Users Success',
  props<{ users: IUser[] }>()
);

export const loadUsersFailed = createAction(
  '[USERS] Load Users Failed',
  props<{ error: string }>()
);
