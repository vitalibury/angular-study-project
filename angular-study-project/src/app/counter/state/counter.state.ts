
export interface CounterState {
  count: number,
  updatedAt?: number
};

export const initialState: CounterState = {
  count: 0
};