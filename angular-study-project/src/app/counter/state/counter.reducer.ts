import { createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { increase, decrease, clear, changeUpdatedAt } from "./counter.actions";
import { CounterState, initialState } from "./counter.state";



const _counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  }))
);

export const counterReducer = (state: CounterState, action: Action) => {
  return _counterReducer(state, action);
}

