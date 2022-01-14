import { createAction, props } from "@ngrx/store";
import { IUser } from "..";

export const getAllUsers = createAction('[USERS] get all users');

export const loadUsers = createAction(
  '[USERS] load all users',
  props<{ users: IUser[] }>()
)

export const deactivateUser = createAction(
  '[USERS] deactivate user',
  props<{ id: number }>()
);

export const deactivateAllUsers = createAction('[USERS] deactivate all users');