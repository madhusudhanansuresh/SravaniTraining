import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.state';
import { map } from 'rxjs';

// Select User Feature State
export const selectUserState = createFeatureSelector<UserState>('user');

// Select Data
export const selectUsers = createSelector(selectUserState, (state) => state.users);
export const selectemail = createSelector(selectUserState, (state) => state.users.map(user => user.email));
export const selectLoading = createSelector(selectUserState, (state) => state.loading);
export const selectError = createSelector(selectUserState, (state) => state.error);
