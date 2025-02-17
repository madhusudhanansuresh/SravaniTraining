import { createReducer, on } from '@ngrx/store';
import { initialUserState } from './user.state';
import * as UserActions from './user.action';

export const userReducer = createReducer(
  initialUserState,

  // Load Users (Start)
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true, error: null })),

  // Load Users (Success)
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),

  // Load Users (Failure)
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
