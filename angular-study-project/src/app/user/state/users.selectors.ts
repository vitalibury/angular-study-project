import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./users.state";

export const usersFeatureSelector = createFeatureSelector<UsersState>('users');

export const usersSelector = createSelector(usersFeatureSelector, state => state.users);