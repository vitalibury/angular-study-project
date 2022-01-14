import { createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { constants } from "src/app/shared/constants";
import { deactivateAllUsers, deactivateUser, getAllUsers, loadUsers } from "./users.actions";
import { initialUsersState, UsersState } from "./users.state";

const _usersReducer = createReducer(
  initialUsersState,
  on(getAllUsers, (state) => ({
    ...state
  })),
  on(loadUsers, (state, action) => ({
    users: action.users
  })),
  on(deactivateAllUsers, state => ({
    users: state.users.map(user => user.age >= constants.MIN_AGE_FOR_DEACTIVATION ? {...user, activated: false} : {...user})
  })),
  on(deactivateUser, (state, action) => ({
    users: state.users.map(user => user.id == action.id ? {...user, activated: false} : {...user})
  }))
);

export const usersReducer = (state: UsersState, action: Action) => {
  return _usersReducer(state, action);
}