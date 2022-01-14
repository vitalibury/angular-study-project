import { IUser } from "..";

export interface UsersState {
  users: IUser[]
};

export const initialUsersState: UsersState = {
  users: []
};